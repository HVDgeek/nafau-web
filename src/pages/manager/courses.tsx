import Course, { CourseTemplateProps } from 'templates/Course'
import classroomsMock from 'components/ClassCard/mock'
import sidebarManagerMock from 'components/Sidebar/managerMock'

export default function Courses(props: CourseTemplateProps) {
  return (
    <Course {...props} withRegister title="Turmas" links={sidebarManagerMock} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
