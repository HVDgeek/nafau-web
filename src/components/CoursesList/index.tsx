import { Box, VStack } from '@chakra-ui/react'
import ClassCard, { ClassCardProps } from 'components/ClassCard'
import Empty from 'components/Empty'

export type CoursesListProps = {
  courses: ClassCardProps[]
}

const CoursesList = ({ courses }: CoursesListProps) => {
  return (
    <Box>
      {courses?.length ? (
        <VStack maxW="700px" margin="auto" mt={8} spacing={6}>
          {courses?.map((course, index) => (
            <Box
              maxW={['300px', '700px']}
              w="full"
              key={`${index} - ${course.title}`}
            >
              <ClassCard {...course} />
            </Box>
          ))}
        </VStack>
      ) : (
        <Empty
          title="Você ainda não tem turmas!"
          description="Você precisa estar inscrito em alguma turma para que apareça aqui. Abraços 😃"
          hasLink
        />
      )}
    </Box>
  )
}

export default CoursesList
