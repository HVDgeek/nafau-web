import { useRouter } from 'next/router'
import {
  Grid,
  Box,
  Text,
  Flex,
  SimpleGrid,
  ScaleFade,
  useBreakpointValue
} from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Sidebar from 'components/Sidebar'
import UserCard, { UserCardProps } from 'components/UserCard'
import Base from 'templates/Base'
import managerMock from 'components/Sidebar/managerMock'
import themes from 'styles/alt-themes'

type MainProps = {
  children: React.ReactNode
}

export type UsersTemplateProps = {
  users: UserCardProps[]
  title: string
}

const Main = ({ children }: MainProps) => {
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

const UsersTemplate = ({ users = [], title }: UsersTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={managerMock} activeLink={asPath} />
          <ScaleFade initialScale={0.9} in={true}>
            <Box>
              <Box mb={6}>
                <Heading lineLeft color={themes.colors.lightGray}>
                  {title}
                </Heading>
              </Box>
              <SimpleGrid columns={3} spacing={8} minChildWidth="250px">
                {users?.map((item) => (
                  <UserCard key={item.email} {...item} />
                ))}
              </SimpleGrid>
              <Flex mt={8} justify="center">
                <Flex
                  onClick={() => {
                    console.log('MOSTRAR MAIS')
                  }}
                  flexDir="column"
                  align="center"
                  cursor="pointer"
                >
                  <Text color={themes.colors.lightGray} fontSize="sm">
                    MOSTAR MAIS
                  </Text>
                  <MdKeyboardArrowDown
                    color={themes.colors.primary}
                    size={20}
                  />
                </Flex>
              </Flex>
            </Box>
          </ScaleFade>
        </Main>
      </Container>
    </Base>
  )
}

export default UsersTemplate
