import { useRouter } from 'next/router'
import classroomsMock from 'components/ClassCard/mock'
import YourCoursesTemplate, {
  YourCoursesTemplateProps
} from 'templates/YourCourses'

export default function Courses(props: YourCoursesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <YourCoursesTemplate {...props} />
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
