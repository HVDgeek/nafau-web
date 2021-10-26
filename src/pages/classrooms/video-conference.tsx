import VideoConferenceTemplate, {
  VideoConferenceTemplateProps
} from 'templates/VideoConference'
import classroomsMock from 'components/ClassCard/mock'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

export default function Classrooms(props: VideoConferenceTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <VideoConferenceTemplate
      {...props}
      title="Salas de aula"
      links={sidebarClassroomsMock}
    />
  )
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}