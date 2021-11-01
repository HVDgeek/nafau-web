import { useRouter } from 'next/router'
import classroomsMock from 'components/ClassCard/mock'
import YourCoursesTemplate, {
  YourCoursesTemplateProps
} from 'templates/YourCourses'
import { useSession } from 'next-auth/client'

export default function Courses(props: YourCoursesTemplateProps) {
  const router = useRouter()

  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  if (router.isFallback) return null

  return <YourCoursesTemplate {...props} title="Turmas" withRegister={true} />
}

export async function getStaticPaths() {
  return { paths: [{ params: { id: '5' } }], fallback: true }
}

export async function getStaticProps() {
  return {
    revalidate: 60,
    props: {
      courses: classroomsMock
    }
  }
}
