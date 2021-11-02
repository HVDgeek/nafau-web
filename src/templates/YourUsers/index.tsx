import React from 'react'
import { useRouter } from 'next/router'
import {
  Grid,
  Box,
  ScaleFade,
  useBreakpointValue,
  Icon,
  Flex,
  SimpleGrid,
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
import { FaPlus } from 'react-icons/fa'
import Heading from 'components/Heading'
import Button from 'components/Button'
import themes from 'styles/alt-themes'
import ClassMenu from 'components/ClassMenu'
import UserCard, { UserCardProps } from 'components/UserCard'
import { Session } from 'next-auth'
import Empty from 'components/Empty'
import LoadingClient from 'components/LoadingClient'
import UserItem, { UserItemProps } from 'components/UserItem'
import { useSubscription } from 'hooks/use-subscription'

type MainProps = {
  children: React.ReactNode
}

export type YourUsersTemplateProps = {
  title: string
  route: 'student' | 'teacher'
  users: UserCardProps[]
  session: Session
  loading: boolean
  newUsers: UserItemProps[]
  withRegister?: boolean
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

const YourUsersTemplate = ({
  route = 'student',
  users = [],
  title,
  loading,
  newUsers,
  withRegister = false,
  onSubmit,
  onRemove
}: YourUsersTemplateProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { deleteAllUsers } = useSubscription()

  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <MainContainer>
          <Sidebar links={managerMock} />
          {isDesktopVersion || isDesktopVersion === undefined ? (
            <Main>
              <ClassMenu activeLink={asPath} />
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
                    <SimpleGrid columns={3} spacing={8} minChildWidth="250px">
                      {users?.map((item) => (
                        <UserCard
                          key={item.email}
                          {...item}
                          route={route}
                          onRemove={() => {
                            console.log('REMOVE USER')
                          }}
                        />
                      ))}
                      {!users.length && (
                        <Empty
                          title={`Sem ${title} adicionados nesta turma!`}
                          description={`Adicione novos ${title} para que apareça aqui. Abraços 😃`}
                          hasLink
                        />
                      )}
                    </SimpleGrid>
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
                    <SimpleGrid columns={3} spacing={8} minChildWidth="250px">
                      {users?.map((item) => (
                        <UserCard
                          key={item.email}
                          {...item}
                          route={route}
                          onRemove={onRemove}
                        />
                      ))}
                      {!users.length && (
                        <Empty
                          title={`Sem ${title} adicionados nesta turma!`}
                          description={`Adicione novos ${title} para que apareça aqui. Abraços 😃`}
                          hasLink
                        />
                      )}
                    </SimpleGrid>
                  )}
                </ScaleFade>
              </Box>
            </Box>
          )}
        </MainContainer>
      </Container>
      <Modal onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="#353646">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="#353646"
            borderRadius={themes.border.radius}
          >
            Adicionar {title}
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="#353646" borderRadius={themes.border.radius}>
            {newUsers?.map(
              (user) =>
                user && (
                  <Box key={user.id} mb={4}>
                    <UserItem
                      email={user.email}
                      name={user.name}
                      avatar={user.avatar}
                      id={user.id}
                    />
                  </Box>
                )
            )}
          </ModalBody>
          <ModalFooter bgColor="#353646" borderRadius={themes.border.radius}>
            <Button
              size="xs"
              onClick={() => {
                onSubmit()
                onClose()
              }}
            >
              Adicionar
            </Button>
            <Box mr={2} />
            <Button color="red" size="xs" onClick={onClose}>
              cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Base>
  )
}

export default YourUsersTemplate
