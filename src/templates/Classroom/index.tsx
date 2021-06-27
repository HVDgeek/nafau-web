import { Box, Flex, Accordion, Icon } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import Base from 'templates/Base'
import Button from 'components/Button'
import ClassItem, { ClassItemProps } from 'components/ClassItem'

import { Container } from 'components/Container'
import ClassroomHeader, {
  ClassroomHeaderProps
} from 'components/ClassroomHeader'

export type ClassroomTemplateProps = {
  lessons: ClassItemProps[]
  courseInfo: ClassroomHeaderProps
}

const Classroom = ({ lessons, courseInfo }: ClassroomTemplateProps) => {
  return (
    <Base>
      <Container>
        <Box mt={8} ml={4}>
          <ClassroomHeader {...courseInfo} />
        </Box>
        <Flex mt={8} mr={8} justify="flex-end">
          <Button size="sm" leftIcon={<Icon as={FaPlus} />}>
            Adicionar aula
          </Button>
        </Flex>
      </Container>
      <Box w="100%" maxW="800px" margin="0 auto" mt={6} px={4}>
        <Accordion allowToggle>
          {lessons?.map((lesson) => (
            <Box key={lesson.id}>
              <ClassItem {...lesson} />
              <Box mt={2} />
            </Box>
          ))}
        </Accordion>
      </Box>
    </Base>
  )
}

export default Classroom
