import React from 'react'
import { Grid, Box, ScaleFade, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import { UserCardProps } from 'components/UserCard'
import { ClassItemProps } from 'components/ClassItem'
import ClassMenu from 'components/ClassMenu'
import Heading from 'components/Heading'
import themes from 'styles/alt-themes'
import { useRouter } from 'next/router'
import { FormikHelpers } from 'formik'
import FormClass from 'components/FormClass'

type MainProps = {
  children: React.ReactNode
}

export type CourseRegisterTemplateProps = {
  id: string
  title: string
  code: string
  status: string
  alunos: UserCardProps[]
  professores: UserCardProps[]
  description: string
  aulas: ClassItemProps[]
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

const CourseRegisterTemplate = ({
  onSubmit,
  initialValues,
  title
}: CourseRegisterTemplateProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <MainContainer>
          <Sidebar links={managerMock} />
          {isDesktopVersion ? (
            <Main>
              <ClassMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <Heading lineLeft={true} color={themes.colors.gray}>
                  {title}
                </Heading>
                <ScaleFade initialScale={0.9} in={true}>
                  <FormClass
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  />
                </ScaleFade>
              </Box>
            </Main>
          ) : (
            <Box mt={8}>
              <ClassMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  <FormClass
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  />
                </ScaleFade>
              </Box>
            </Box>
          )}
        </MainContainer>
      </Container>
    </Base>
  )
}

export default CourseRegisterTemplate
