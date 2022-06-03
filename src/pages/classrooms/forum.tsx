import classroomsMock from 'components/ClassCard/mock'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import usersMock from 'components/UserCard/mock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import ForumTemplate, { ForumTemplateProps } from 'templates/ForumTemplate'
import { useUser } from 'hooks/use-user'
import { getImageUrl } from 'utils/getImageUrl'
import { ClassCardProps } from 'components/ClassCard'
import CheckingProfile from 'components/CheckingProfile'
import PrivatePage from 'components/PrivatePage'

export default function Classrooms(props: ForumTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  const {
    getTurmas,
    loading,
    getProfiles,
    loading: loadingProfiles
  } = useUser()

  const canSeeAulas = getProfiles()?.canSeeAulas

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canSeeAulas?.isActive) {
    return <PrivatePage />
  }

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
    <ForumTemplate
      {...props}
      title="Fórum de discussão"
      loading={loading}
      courses={courses}
      links={sidebarClassroomsMock}
      users={usersMock}
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
