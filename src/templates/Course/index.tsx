import { Flex, Icon } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import { ClassCardProps } from 'components/ClassCard'
import CoursesList from 'components/CoursesList'
import { FaPlus } from 'react-icons/fa'

export type CourseTemplateProps = {
  courses: ClassCardProps[]
  onSubmit: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Course = ({ courses = [], onSubmit }: CourseTemplateProps) => {
  return (
    <Base>
      <Container>
        <Flex justifyContent="space-between" ml={4}>
          <Heading lineLeft color={themes.colors.lightGray}>
            Minhas turmas
          </Heading>
          <Button onClick={onSubmit} size="sm" leftIcon={<Icon as={FaPlus} />}>
            Cadastrar
          </Button>
        </Flex>
        <CoursesList courses={courses} />
      </Container>
    </Base>
  )
}

export default Course
