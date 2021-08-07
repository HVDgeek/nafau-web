import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Box, ScaleFade, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import UserMenu from 'components/UserMenu'
import CoursesList from 'components/CoursesList'
import { ClassCardProps } from 'components/ClassCard'

type MainProps = {
  children: React.ReactNode
}

export type YourCoursesTemplateProps = {
  route?: string
  courses: ClassCardProps[]
  titleSemTurma?: string
  descriptionSemTurma?: string
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
  courses = [],
  titleSemTurma = 'Você ainda não tem turmas!',
  descriptionSemTurma = 'Você precisa estar inscrito em alguma turma para que apareça aqui. Abraços 😃'
}: YourCoursesTemplateProps) => {
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
          {isDesktopVersion || isDesktopVersion === undefined ? (
            <Main>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  <CoursesList
                    route={route}
                    titleSemTurma={titleSemTurma}
                    descriptionSemTurma={descriptionSemTurma}
                    courses={courses}
                  />
                </ScaleFade>
              </Box>
            </Main>
          ) : (
            <Box mt={8}>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  <CoursesList
                    route={route}
                    titleSemTurma={titleSemTurma}
                    descriptionSemTurma={descriptionSemTurma}
                    courses={courses}
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

export default YourCoursesTemplate
