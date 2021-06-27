import { Box, Accordion } from '@chakra-ui/react'
import Base from 'templates/Base'
import ClassItem, { ClassItemProps } from 'components/ClassItem'

import { Container } from 'components/Container'

export type ClassroomTemplateProps = {
  lessons: ClassItemProps[]
}

const Classroom = ({ lessons }: ClassroomTemplateProps) => {
  return (
    <Base>
      <Container>
        <Box mt={8} ml={4}></Box>
      </Container>
      <Box w="100%" maxW="800px" margin="0 auto" mt={6} px={4}>
        <Accordion allowToggle>
          {lessons?.map((lesson) => (
            <>
              <ClassItem key={lesson.id} {...lesson} />
              <Box mt={2} />
            </>
          ))}
        </Accordion>
      </Box>
    </Base>
  )
}

export default Classroom
