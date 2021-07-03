import Profile from 'templates/Profile'
import classroomsMock from 'components/ClassCard/mock'
import CoursesList, { CoursesListProps } from 'components/CoursesList'

export default function Courses(props: CoursesListProps) {
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
