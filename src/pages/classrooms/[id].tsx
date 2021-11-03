import Classroom, { ClassroomTemplateProps } from 'templates/Classroom'
import lessonsMock from 'components/ClassItem/mock'
import courseInfoMock from 'components/ClassroomHeader/mock'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Index(props: ClassroomTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }
  return <Classroom {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      lessons: lessonsMock,
      courseInfo: courseInfoMock
    }
  }
}
