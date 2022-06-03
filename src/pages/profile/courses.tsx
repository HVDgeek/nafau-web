import { useSession } from 'next-auth/client'
import Profile from 'templates/Profile'
import classroomsMock from 'components/ClassCard/mock'
import CoursesList, { CoursesListProps } from 'components/CoursesList'
import { useRouter } from 'next/router'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import { getImageUrl } from 'utils/getImageUrl'
import { ClassCardProps } from 'components/ClassCard'

export default function Courses(props: CoursesListProps) {
  const [session, loading] = useSession()
  const { asPath } = useRouter()
  const { getTurmas, loading: loadingProfiles, getProfiles } = useUser()

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (typeof window !== undefined && loading) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const courses = getTurmas().map((turma) => ({
    id: turma.id,
    title: turma.title,
    code: turma.code,
    status: turma.status,
    // timing: 50,
    lastLesson: turma.aulas.length && {
      title: turma.aulas[turma.aulas.length - 1]?.title
    },
    teacher: {
      name: turma?.teachers[0]?.name,
      avatar: `${getImageUrl(turma?.teachers[0]?.user?.avatar?.src)}`
    },
    countAlunos: turma.alunos.length
  })) as ClassCardProps[]

  return (
    <Profile>
      <CoursesList
        {...props}
        // title="Minhas turmas"
        module="classrooms"
        route="my-courses"
        courses={courses}
        // loading={loading}
        buttonTitle="Acessar"
        withRemove={false}
      />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      session: session
    }
  }
}
