import Profile from 'templates/Profile'
import classroomsMock from 'components/ClassCard/mock'
import CoursesList, { CoursesListProps } from 'components/CoursesList'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Courses(props: CoursesListProps) {
  const [session] = useSession()
  const { push, asPath } = useRouter()

  if (session) {
    return (
      <Profile>
        <CoursesList {...props} />
      </Profile>
    )
  }

  // push(`/sign-in?callbackUrl=${asPath}`)
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
