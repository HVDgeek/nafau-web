import { Box, VStack, ScaleFade } from '@chakra-ui/react'
import ClassCard, { ClassCardProps } from 'components/ClassCard'
import Empty from 'components/Empty'

export type CoursesListProps = {
  courses: ClassCardProps[]
  titleSemTurma?: string
  descriptionSemTurma?: string
  route?: string
  onRemove: (id: string) => void
}

const CoursesList = ({
  route,
  courses,
  onRemove,
  titleSemTurma = 'Você ainda não tem turmas!',
  descriptionSemTurma = 'Você precisa estar inscrito em alguma turma para que apareça aqui. Abraços 😃'
}: CoursesListProps) => {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box>
        {courses?.length ? (
          <VStack maxW="700px" margin="auto" mt={8} spacing={6}>
            {courses?.map((course, index) => (
              <Box
                maxW={['300px', '700px']}
                w="full"
                key={`${index} - ${course.title}`}
              >
                <ClassCard {...course} route={route} onRemove={onRemove} />
              </Box>
            ))}
          </VStack>
        ) : (
          <Empty
            title={titleSemTurma}
            description={descriptionSemTurma}
            hasLink
          />
        )}
      </Box>
    </ScaleFade>
  )
}

export default CoursesList
