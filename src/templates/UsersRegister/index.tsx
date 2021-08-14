import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Box, ScaleFade, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import { UserCardProps } from 'components/UserCard'
import FormUser from 'components/FormUser'
import UserMenu from 'components/UserMenu'
import { FormikHelpers } from 'formik'

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
  initialValues: any
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
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
      gridTemplateColumns={isDesktopVesion ? `150px 1fr` : '1fr'}
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
      gridTemplateColumns={isDesktopVesion ? `200px 1fr` : '1fr'}
      gap={10}
    >
      {children}
    </Grid>
  )
}

const UsersRegisterTemplate = (props: UsersRegisterTemplateProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const { asPath } = useRouter()
  const { onSubmit, initialValues } = props

  return (
    <Base>
      <Container>
        <MainContainer>
          <Sidebar links={managerMock} />
          {/* <Box>{JSON.stringify(props, null, 2)}</Box> */}
          {isDesktopVersion ? (
            <Main>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  <FormUser onSubmit={onSubmit} initialValues={initialValues} />
                </ScaleFade>
              </Box>
            </Main>
          ) : (
            <Box mt={8}>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  <FormUser onSubmit={onSubmit} initialValues={initialValues} />
                </ScaleFade>
              </Box>
            </Box>
          )}
        </MainContainer>
      </Container>
    </Base>
  )
}

export default UsersRegisterTemplate
