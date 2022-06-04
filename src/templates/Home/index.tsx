import { Text, Box, Image, Stack } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import { useSession } from 'next-auth/client'

import GeneralDashBoard from '../../components/Dashboard/Geral'

const Home = () => {
  const [session] = useSession()
  return (
    <Base>
      <Container>
        <Box mt={6} display="flex" alignItems="center" justifyContent="center">
          <Image
            boxSize="100px"
            src="https://user-images.githubusercontent.com/87288949/137050624-a4e7733f-499a-4f53-8ac1-915bdac4df12.png"
            alt="Hello"
          />
          <Box ml={5}>
            <Stack spacing={3}>
              <Heading>
                Olá,{' '}
                {session?.user?.name?.split('*#nafau#*')[0] ||
                  session?.user?.name}
              </Heading>
              <Text fontSize="sm">Seja Bem Vindo à Platatafoma NAFAU</Text>
            </Stack>
          </Box>
        </Box>

        <Box mt={8}>
          <Heading lineLeft>Resumo</Heading>
        </Box>

        {/*ESTUDANT INFOS 
        <Box mt={8}>
          <Heading lineLeft>STUDENT</Heading>
        </Box>*/}
        <GeneralDashBoard />
      </Container>
    </Base>
  )
}

export default Home
