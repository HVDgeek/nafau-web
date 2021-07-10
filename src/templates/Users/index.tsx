import { useRouter } from 'next/router'
import { Text, Grid } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import { UserCardProps } from 'components/UserCard'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'

type MainProps = {
  children: React.ReactNode
}

export type UsersTemplateProps = {
  users: UserCardProps[]
}

const Main = ({ children }: MainProps) => {
  return (
    <Grid mt={4} display="grid" gridTemplateColumns="200px 1fr" gap={10}>
      {children}
    </Grid>
  )
}

const UsersTemplate = ({ users = [] }: UsersTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={managerMock} activeLink={asPath} />
          <Text>Users</Text>
        </Main>
      </Container>
    </Base>
  )
}

export default UsersTemplate
