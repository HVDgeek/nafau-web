import Course, { CourseTemplateProps } from 'templates/Course'
import classroomsMock from 'components/ClassCard/mock'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

export default function Classrooms(props: CourseTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <Course {...props} title="Minhas turmas" links={sidebarClassroomsMock} />
  )
}

export async function getServerSideProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
