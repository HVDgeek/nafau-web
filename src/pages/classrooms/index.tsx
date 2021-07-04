import Course, { CourseTemplateProps } from 'templates/Course'
import classroomsMock from 'components/ClassCard/mock'

export default function Classrooms(props: CourseTemplateProps) {
  return <Course {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
