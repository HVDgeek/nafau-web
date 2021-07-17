import Course, { CourseTemplateProps } from 'templates/Course'
import classroomsMock from 'components/ClassCard/mock'

export default function Courses(props: CourseTemplateProps) {
  return <Course {...props} withRegister title="Turmas" />
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
