import React, { useState } from 'react'
import {
  Box,
  Flex,
  Accordion,
  Icon,
  ScaleFade,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import Base from 'templates/Base'
import Button from 'components/Button'
import ClassItem, { ClassItemProps } from 'components/ClassItem'
import { Main } from 'templates/Users'
import Sidebar from 'components/Sidebar'
import { Container } from 'components/Container'
import IconButton from 'components/IconButton'
import ClassroomHeader, {
  ClassroomHeaderProps
} from 'components/ClassroomHeader'
import { LinkProps } from 'components/Sidebar'
import { useRouter } from 'next/router'
import Empty from 'components/Empty'
import themes from 'styles/alt-themes'
import FormLesson from 'components/FormLesson'
import FormAddContentToAula from 'components/FormAddContentToAula'
import { FormikHelpers } from 'formik'
import { useAula } from 'hooks/use-aula'
import { AiOutlineClose } from 'react-icons/ai'
import LoadingClient from 'components/LoadingClient'
import ShowMore from 'components/ShowMore'

export type ClassroomTemplateProps = {
  lessons: ClassItemProps[]
  courseInfo: ClassroomHeaderProps
  loading: boolean
  hasMore: boolean
  handleShowMore: () => void
  addLinkToAula: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
  removeLinkFromAula: (id: string, idItem: string) => void
  addVideoToAula: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
  removeVideoFromAula: (id: string, idItem: string) => void
  addAudioToAula: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
  removeAudioFromAula: (id: string, idItem: string) => void
  idTurma: string
  links: LinkProps[]
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
  onRemove: (id: string) => void
}

const Classroom = ({
  lessons = [],
  courseInfo,
  links,
  onSubmit,
  onRemove,
  loading,
  hasMore,
  handleShowMore,
  addLinkToAula,
  removeLinkFromAula,
  addVideoToAula,
  removeVideoFromAula,
  addAudioToAula,
  removeAudioFromAula
}: ClassroomTemplateProps) => {
  const {
    isOpen,
    onOpen,
    onClose,
    isOpenLinkToAula,
    onCloseLinkToAula,
    isOpenRemoveLinkToAula,
    onCloseRemoveLinkToAula,
    isOpenVideoToAula,
    onCloseVideoToAula,
    isOpenRemoveVideoToAula,
    onCloseRemoveVideoToAula,
    isOpenAudioToAula,
    onCloseAudioToAula,
    isOpenRemoveAudioToAula,
    onCloseRemoveAudioToAula
  } = useAula()
  const {
    isOpen: isOpenRemoveAula,
    onOpen: onOpenRemoveAula,
    onClose: onCloseRemoveAula
  } = useDisclosure()

  const { asPath } = useRouter()
  const [idAula, setIdAula] = useState<string>('')
  const [idItem, setIdItem] = useState<string>('')

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

            {loading ? (
              <LoadingClient title="as minhas aulas" />
            ) : (
              <Box w="100%" maxW="800px" margin="0 auto" mt={6} px={4}>
                <Accordion allowToggle>
                  {lessons?.map((lesson) => (
                    <Box position="relative" key={lesson.id}>
                      <ClassItem
                        {...lesson}
                        setIdAula={setIdAula}
                        setIdItem={setIdItem}
                        id={lesson.id}
                      />
                      <Box position="absolute" right={-10} bottom={5}>
                        <IconButton
                          onClick={() => {
                            setIdAula(lesson.id)
                            onOpenRemoveAula()
                          }}
                          ariaLabel="Remover usuário"
                        >
                          <AiOutlineClose size={18} />
                        </IconButton>
                      </Box>
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
            )}
            {hasMore && (
              <ShowMore
                tooltipText="Carregar mais aulas!"
                onClick={handleShowMore}
              />
            )}
          </ScaleFade>
        </Main>
      </Container>
      {/*Modal de Adição de aula*/}
      <Modal
        onClose={onClose}
        size="md"
        isOpen={isOpen}
        isCentered
        scrollBehavior="inside"
      >
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
            <FormLesson onSubmit={onSubmit} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/*Modal de Remoção de aula*/}
      <Modal
        onClose={onCloseRemoveAula}
        size="md"
        isOpen={isOpenRemoveAula}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Remover Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <Text fontWeight="light" mr={2}>
              Tem certeza que deseja esta aula ?
            </Text>
          </ModalBody>
          <ModalFooter bgColor="gray.800" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onCloseRemoveAula}>
              Não
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                onRemove(idAula)
                onCloseRemoveAula()
              }}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*Modal de Adição do link à aula*/}
      <Modal
        onClose={onCloseLinkToAula}
        size="md"
        isOpen={isOpenLinkToAula}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Adicionar link à Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <FormAddContentToAula
              placeholders={{
                title: 'Título do link',
                url: 'https://example.com/introducao.pdf',
                description: 'Descrição do link'
              }}
              onClose={onCloseLinkToAula}
              onSubmit={addLinkToAula}
              initialValues={{
                idAula,
                title: '',
                description: '',
                url: ''
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/*Modal de Remoção do link da aula*/}
      <Modal
        onClose={onCloseRemoveLinkToAula}
        size="md"
        isOpen={isOpenRemoveLinkToAula}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Remover Link da Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <Text fontWeight="light" mr={2}>
              Tem certeza que deseja remover este link da aula ?
            </Text>
          </ModalBody>
          <ModalFooter bgColor="gray.800" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onCloseRemoveLinkToAula}>
              Não
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                removeLinkFromAula(idAula, idItem)
                onCloseRemoveLinkToAula()
              }}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*Modal de Adição de Vídeo à aula*/}
      <Modal
        onClose={onCloseVideoToAula}
        size="md"
        isOpen={isOpenVideoToAula}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Adicionar Vídeo à Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <FormAddContentToAula
              placeholders={{
                title: 'Título do vídeo',
                url: 'https://youtu.be/tZaWOKhCNi8',
                description: 'Descrição do vídeo'
              }}
              onClose={onCloseVideoToAula}
              onSubmit={addVideoToAula}
              initialValues={{
                idAula,
                title: '',
                description: '',
                url: ''
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/*Modal de Remoção do Audio da aula*/}
      <Modal
        onClose={onCloseRemoveVideoToAula}
        size="md"
        isOpen={isOpenRemoveVideoToAula}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Remover Vídeo da Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <Text fontWeight="light" mr={2}>
              Tem certeza que deseja remover este vídeo da aula ?
            </Text>
          </ModalBody>
          <ModalFooter bgColor="gray.800" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onCloseRemoveVideoToAula}>
              Não
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                removeVideoFromAula(idAula, idItem)
                onCloseRemoveVideoToAula()
              }}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        onClose={onCloseAudioToAula}
        size="md"
        isOpen={isOpenAudioToAula}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Adicionar Áudio à Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <FormAddContentToAula
              placeholders={{
                title: 'Título do áudio',
                url: 'https://soundcloud.com/lambdatres/259-empreendedorismo',
                description: 'Descrição do áudio'
              }}
              onClose={onCloseAudioToAula}
              onSubmit={addAudioToAula}
              initialValues={{
                idAula,
                title: '',
                description: '',
                url: ''
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/*Modal de Remoção do Audio da aula*/}
      <Modal
        onClose={onCloseRemoveAudioToAula}
        size="md"
        isOpen={isOpenRemoveAudioToAula}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Remover Áudio da Aula
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <Text fontWeight="light" mr={2}>
              Tem certeza que deseja remover este áudio da aula ?
            </Text>
          </ModalBody>
          <ModalFooter bgColor="gray.800" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onCloseRemoveAudioToAula}>
              Não
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                removeAudioFromAula(idAula, idItem)
                onCloseRemoveAudioToAula()
              }}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Base>
  )
}

export default Classroom
