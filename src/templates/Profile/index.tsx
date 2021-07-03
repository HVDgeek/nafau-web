import { Box, useBreakpointValue } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import Base from 'templates/Base'
import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Base>
      <Container>
        <Heading lineLeft>Meu perfil</Heading>
        <S.Main>
          <ProfileMenu />
          <Box w="100%" bgColor="gray.800" p={4}>
            {children}
          </Box>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
