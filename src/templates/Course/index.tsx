import { Box } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import { ClassCardProps } from 'components/ClassCard'
import CoursesList from 'components/CoursesList'

export type CourseTemplateProps = {
  courses: ClassCardProps[]
}

const Course = ({ courses = [] }: CourseTemplateProps) => {
  return (
    <Base>
      <Container>
        <Box ml={4}>
          <Heading lineLeft color={themes.colors.lightGray}>
            Minhas turmas
          </Heading>
        </Box>
        <CoursesList courses={courses} />
      </Container>
    </Base>
  )
}

export default Course
