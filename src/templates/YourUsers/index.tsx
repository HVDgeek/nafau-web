import React from 'react'
import { useRouter } from 'next/router'
import {
  Grid,
  Box,
  ScaleFade,
  useBreakpointValue,
  Icon,
  Flex
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

type MainProps = {
  children: React.ReactNode
}

export type YourUsersTemplateProps = {
  route?: string
  title: string
  withRegister?: boolean
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
  route,
  title,
  withRegister = false
}: YourUsersTemplateProps) => {
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
                          console.log('')
                        }}
                        size="sm"
                        leftIcon={<Icon as={FaPlus} />}
                      >
                        Adicionar
                      </Button>
                    )}
                  </Flex>
                  {/**/}
                </ScaleFade>
              </Box>
            </Main>
          ) : (
            <Box mt={8}>
              <UserMenu activeLink={asPath} />
              <Box w="100%" bgColor="gray.800" p={4}>
                <ScaleFade initialScale={0.9} in={true}>
                  {/* */}
                </ScaleFade>
              </Box>
            </Box>
          )}
        </MainContainer>
      </Container>
    </Base>
  )
}

export default YourUsersTemplate
