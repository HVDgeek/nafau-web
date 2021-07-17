import Course, { CourseTemplateProps } from 'templates/Course'
import classroomsMock from 'components/ClassCard/mock'
import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'

export default function Classrooms(props: CourseTemplateProps) {
  return (
    <Course {...props} title="Minhas turmas" links={sidebarClassroomsMock} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
