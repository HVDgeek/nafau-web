import React from 'react'
import { useRouter } from 'next/router'
import {
  Grid,
  Box,
  Flex,
  SimpleGrid,
  ScaleFade,
  useBreakpointValue,
  Icon
} from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Sidebar from 'components/Sidebar'
import UserCard, { UserCardProps } from 'components/UserCard'
import Base from 'templates/Base'
import { FaPlus } from 'react-icons/fa'
import managerMock from 'components/Sidebar/managerMock'
import themes from 'styles/alt-themes'
import ShowMore from 'components/ShowMore'
import Empty from 'components/Empty'
import LoadingClient from 'components/LoadingClient'

const titles = {
  student: 'Estudante',
  teacher: 'Professor',
  attendant: 'Atendente'
}

type MainProps = {
  children: React.ReactNode
}

export type UsersTemplateProps = {
  route: 'student' | 'teacher' | 'attendant'
  users: UserCardProps[]
  title: string
  loading: boolean
  onSubmit: () => void
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
        isDesktopVesion || isDesktopVesion === undefined ? `150px 1fr` : '1fr'
      }
      gap={10}
    >
      {children}
    </Grid>
  )
}

const UsersTemplate = ({
  route = 'student',
  users = [],
  title,
  loading,
  onSubmit
}: UsersTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={managerMock} activeLink={asPath} />
          <ScaleFade initialScale={0.9} in={true}>
            {loading ? (
              <LoadingClient title={title} />
            ) : (
              <Box>
                <Flex justifyContent="space-between" mb={6}>
                  <Heading lineLeft color={themes.colors.lightGray}>
                    {title}
                  </Heading>
                  <Button
                    onClick={onSubmit}
                    size="sm"
                    leftIcon={<Icon as={FaPlus} />}
                  >
                    Cadastrar
                  </Button>
                </Flex>
                <SimpleGrid columns={3} spacing={8} minChildWidth="250px">
                  {users?.map((item) => (
                    <UserCard key={item.email} {...item} route={route} />
                  ))}
                  {!users.length && (
                    <Empty
                      title={`Nenhum ${titles[route]} foi cadastrado!`}
                      description={`Cadastre um novo ${titles[route]} para que apareça aqui. Abraços 😃`}
                      hasLink
                    />
                  )}
                </SimpleGrid>
                <ShowMore
                  onClick={() => {
                    console.log('SHow more')
                  }}
                />
              </Box>
            )}
          </ScaleFade>
        </Main>
      </Container>
    </Base>
  )
}

export default UsersTemplate
