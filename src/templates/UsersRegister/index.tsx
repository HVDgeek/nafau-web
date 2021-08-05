import React from 'react'
import { Grid, Box, ScaleFade, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import { UserCardProps } from 'components/UserCard'

type MainProps = {
  children: React.ReactNode
}

export type UsersRegisterTemplateProps = {
  name: string
  sexo: string
  birthday: string
  telefone: string
  numero_do_BI: string
  numeroDeMatricula?: string
  user: UserCardProps
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
      gridTemplateColumns={isDesktopVesion ? `200px 1fr` : '1fr'}
      gap={10}
    >
      {children}
    </Grid>
  )
}

const UsersRegisterTemplate = (props: UsersRegisterTemplateProps) => {
  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={managerMock} />
          <ScaleFade initialScale={0.9} in={true}>
            <Box>{JSON.stringify(props, null, 2)}</Box>
          </ScaleFade>
        </Main>
      </Container>
    </Base>
  )
}

export default UsersRegisterTemplate
