import Course, { CourseTemplateProps } from 'templates/Course'
import classroomsMock from 'components/ClassCard/mock'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function Classrooms(props: CourseTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <Course
      {...props}
      title="Minhas turmas"
      module="classrooms"
      route="my-courses"
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
      session: session,
      courses: classroomsMock
    }
  }
}
