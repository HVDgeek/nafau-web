import { useSession } from 'next-auth/client'
import Profile from 'templates/Profile'
import classroomsMock from 'components/ClassCard/mock'
import CoursesList, { CoursesListProps } from 'components/CoursesList'
import { useRouter } from 'next/router'

export default function Courses(props: CoursesListProps) {
  const [session, loading] = useSession()
  const { asPath } = useRouter()

  if (typeof window !== undefined && loading) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  return (
    <Profile>
      <CoursesList {...props} />
    </Profile>
  )
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
