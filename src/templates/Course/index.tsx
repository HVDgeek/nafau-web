import { Box, VStack } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import ClassCard, { ClassCardProps } from 'components/ClassCard'

export type CourseTemplateProps = {
  courses: ClassCardProps[]
}

const Course = ({ courses }: CourseTemplateProps) => {
  return (
    <Base>
      <Container>
        <Box ml={4}>
          <Heading lineLeft color={themes.colors.lightGray}>
            Minhas turmas
          </Heading>
        </Box>
        <VStack maxW="700px" margin="auto" mt={8} spacing={6}>
          {courses?.map((course, index) => (
            <Box
              maxWidth={['300px', '700px']}
              w="full"
              key={`${index} - ${course.title}`}
            >
              <ClassCard {...course} />
            </Box>
          ))}
        </VStack>
      </Container>
    </Base>
  )
}

export default Course
