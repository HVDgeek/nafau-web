import Course, { CourseTemplateProps } from 'templates/Course'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import { useUser } from 'hooks/use-user'
import { getImageUrl } from 'utils/getImageUrl'
import { ClassCardProps } from 'components/ClassCard'

export default function Classrooms(props: CourseTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()
  const { getTurmas, loading } = useUser()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
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
    <Course
      {...props}
      title="Minhas turmas"
      module="classrooms"
      route="my-courses"
      courses={courses}
      loading={loading}
      buttonTitle="Acessar"
      withRemove={false}
      links={sidebarClassroomsMock}
    />
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
