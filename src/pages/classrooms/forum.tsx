import classroomsMock from 'components/ClassCard/mock'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import usersMock from 'components/UserCard/mock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import ForumTemplate, { ForumTemplateProps } from 'templates/ForumTemplate'

export default function Classrooms(props: ForumTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <ForumTemplate
      {...props}
      title="Fórum de discussão"
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
      session: session,
      courses: classroomsMock
    }
  }
}
