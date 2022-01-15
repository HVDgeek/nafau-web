import {
  Box,
  Flex,
  Accordion,
  Icon,
  ScaleFade,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import Base from 'templates/Base'
import Button from 'components/Button'
import ClassItem, { ClassItemProps } from 'components/ClassItem'
import { Main } from 'templates/Users'
import Sidebar from 'components/Sidebar'
import { Container } from 'components/Container'
import ClassroomHeader, {
  ClassroomHeaderProps
} from 'components/ClassroomHeader'
import { LinkProps } from 'components/Sidebar'
import { useRouter } from 'next/router'
import Empty from 'components/Empty'
import themes from 'styles/alt-themes'
import FormLesson from 'components/FormLesson'

export type ClassroomTemplateProps = {
  lessons: ClassItemProps[]
  courseInfo: ClassroomHeaderProps
  links: LinkProps[]
  handleAddClass: () => void
}

const Classroom = ({
  lessons,
  courseInfo,
  links,
  handleAddClass
}: ClassroomTemplateProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={links} activeLink={asPath} />
          <ScaleFade initialScale={0.9} in={true}>
            <Box ml={4}>
              <ClassroomHeader {...courseInfo} />
            </Box>
            <Flex mt={8} mr={8} justify="flex-end">
              <Button
                onClick={onOpen}
                size="sm"
                leftIcon={<Icon as={FaPlus} />}
              >
                Adicionar aula
              </Button>
            </Flex>

            <Box w="100%" maxW="800px" margin="0 auto" mt={6} px={4}>
              <Accordion allowToggle>
                {lessons?.map((lesson) => (
                  <Box key={lesson.id}>
                    <ClassItem {...lesson} />
                    <Box mt={2} />
                  </Box>
                ))}
                {!lessons.length && (
                  <Empty
                    title={`Nenhuma aula foi adicionada!`}
                    description={`Adicione uma aula para que apareça aqui. Abraços 😃`}
                    hasLink
                  />
                )}
              </Accordion>
            </Box>
          </ScaleFade>
        </Main>
      </Container>
      <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Adicionar uma Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <FormLesson />
          </ModalBody>
          <ModalFooter bgColor="gray.800" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onClose}>
              Cancelar
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                handleAddClass()
                onClose()
              }}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Base>
  )
}

export default Classroom
