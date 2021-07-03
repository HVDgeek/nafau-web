import { useRouter } from 'next/router'
import { Box, Grid, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import Base from 'templates/Base'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Main = ({ children }: ProfileTemplateProps) => {
  return (
    <Grid mt={8} display="grid" gridTemplateColumns="200px 1fr" gap={10}>
      {children}
    </Grid>
  )
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Base>
      <Container>
        <Heading lineLeft>Meu perfil</Heading>
        {isDesktopVersion ? (
          <Main>
            <ProfileMenu activeLink={asPath} />
            <Box w="100%" bgColor="gray.800" p={4}>
              {children}
            </Box>
          </Main>
        ) : (
          <Box mt={8}>
            <ProfileMenu activeLink={asPath} />
            <Box w="100%" bgColor="gray.800" p={4}>
              {children}
            </Box>
          </Box>
        )}
      </Container>
    </Base>
  )
}

export default Profile
