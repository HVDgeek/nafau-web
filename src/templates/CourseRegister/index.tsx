import React from 'react'
import { Grid, Box, ScaleFade, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Sidebar from 'components/Sidebar'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import { UserCardProps } from 'components/UserCard'
import { ClassItemProps } from 'components/ClassItem'

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
  aulas: ClassItemProps[]
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

const CourseRegisterTemplate = (props: CourseRegisterTemplateProps) => {
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

export default CourseRegisterTemplate
