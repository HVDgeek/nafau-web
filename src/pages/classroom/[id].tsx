import Classroom, { ClassroomTemplateProps } from 'templates/Classroom'
import lessonsMock from 'components/ClassItem/mock'

export default function index(props: ClassroomTemplateProps) {
  return <Classroom {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      lessons: lessonsMock
    }
  }
}
