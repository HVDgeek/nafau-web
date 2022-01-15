import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Grid,
  Box,
  ScaleFade,
  useBreakpointValue,
  Icon,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter
} from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import UserMenu from 'components/UserMenu'
import CoursesList from 'components/CoursesList'
import { ClassCardProps } from 'components/ClassCard'
import { FaPlus } from 'react-icons/fa'
import Heading from 'components/Heading'
import Button from 'components/Button'
import themes from 'styles/alt-themes'
import { Session } from 'next-auth'
import LoadingClient from 'components/LoadingClient'
import CourseItem from 'components/CourseItem'
import { useSubscription } from 'hooks/use-subscription'

type MainProps = {
  children: React.ReactNode
}

export type NewCourses = {
  id: string
  code: string
  title: string
}

export type YourCoursesTemplateProps = {
  route?: string
  session: Session
  loading: boolean
  courses: ClassCardProps[]
  titleSemTurma?: string
  descriptionSemTurma?: string
  title: string
  withRegister?: boolean
  newCourses: NewCourses[]
  onSubmit: () => void
  onRemove: (id: string) => void
}

export const MainContainer = ({ children }: MainProps) => {
  const isDesktopVesion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Grid
      mt={4}
      display="grid"
      gridTemplateColumns={
        isDesktopVesion || isDesktopVesion === undefined ? `150px 1fr` : '1fr'
      }
      gap={10}
    >
      {children}
    </Grid>
  )
}

export const Main = ({ children }: MainProps) => {
  const isDesktopVesion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Grid
      mt={4}
      display="grid"
      gridTemplateColumns={
        isDesktopVesion || isDesktopVesion === undefined ? `200px 1fr` : '1fr'
      }
      gap={10}
    >
      {children}
    </Grid>
  )
}

const YourCoursesTemplate = ({
  route,
  title,
  loading,
  newCourses,
  withRegister = false,
  courses = [],
  onRemove,
  onSubmit,
  titleSemTurma = 'Você ainda não tem turmas!',
  descriptionSemTurma = 'Você precisa estar inscrito em alguma turma para que apareça aqui. Abraços 😃'
}: YourCoursesTemplateProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const { deleteAllUsers } = useSubscription()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <MainContainer>
          <Sidebar links={managerMock} />
          {isDesktopVersion || isDesktopVersion === undefined ? (
            <Main>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  <Flex justifyContent="space-between" ml={4}>
                    <Heading lineLeft color={themes.colors.lightGray}>
                      {title}
                    </Heading>

                    {withRegister && (
                      <Button
                        onClick={() => {
                          deleteAllUsers()
                          onOpen()
                        }}
                        size="sm"
                        leftIcon={<Icon as={FaPlus} />}
                      >
                        Adicionar
                      </Button>
                    )}
                  </Flex>
                  {loading ? (
                    <LoadingClient title={title} />
                  ) : (
                    <CoursesList
                      onRemove={onRemove}
                      route={route}
                      titleSemTurma={titleSemTurma}
                      descriptionSemTurma={descriptionSemTurma}
                      courses={courses}
                    />
                  )}
                </ScaleFade>
              </Box>
            </Main>
          ) : (
            <Box mt={8}>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  {loading ? (
                    <LoadingClient title={title} />
                  ) : (
                    <CoursesList
                      onRemove={onRemove}
                      route={route}
                      titleSemTurma={titleSemTurma}
                      descriptionSemTurma={descriptionSemTurma}
                      courses={courses}
                    />
                  )}
                </ScaleFade>
              </Box>
            </Box>
          )}
        </MainContainer>
      </Container>
      <Modal
        scrollBehavior="inside"
        onClose={onClose}
        size="md"
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bgColor="#353646">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="#353646"
            borderRadius={themes.border.radius}
          >
            Adicionar Turmas
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="#353646" borderRadius={themes.border.radius}>
            {newCourses?.map(
              (course) =>
                course && (
                  <Box key={course.id} mb={4}>
                    <CourseItem
                      title={course.title}
                      code={course.code}
                      id={course.id}
                    />
                  </Box>
                )
            )}
          </ModalBody>
          <ModalFooter bgColor="#353646" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onClose}>
              Cancelar
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                onSubmit()
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

export default YourCoursesTemplate
