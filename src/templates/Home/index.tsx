import { Text, Box, Image, Stack } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'

import StudentInfos from '../../components/Dashboard/Studant/'
import TeacherInfos from '../../components/Dashboard/Teacher/'
import ManagerInfos from '../../components/Dashboard/Manager/'

const Home = () => {
  return (
    <Base>
      <Container>
        <Box mt={6} display="flex" alignItems="center">
          <Image
            boxSize="100px"
            src="https://user-images.githubusercontent.com/87288949/137050624-a4e7733f-499a-4f53-8ac1-915bdac4df12.png"
            alt="Hello"
          />
          <Box ml={5}>
            <Stack spacing={3}>
              <Heading>Olá, Wilson Dos Santos</Heading>
              <Text fontSize="sm">Seja Bem Vindo à Platatafoma NAFAU</Text>
            </Stack>
          </Box>
        </Box>

        <Box mt={8}>
          <Heading lineLeft>Resumo</Heading>
        </Box>

        {/*ESTUDANT INFOS */}
        <Box mt={8}>
          <Heading lineLeft>STUDENT</Heading>
        </Box>
        <StudentInfos />

        {/*TEACHER INFOS */}
        <Box mt={8}>
          <Heading lineLeft>TEACHERS</Heading>
        </Box>
        <TeacherInfos />

        {/*Manager INFOS */}
        <Box mt={8}>
          <Heading lineLeft>MANAGER</Heading>
        </Box>
        <ManagerInfos />
      </Container>
    </Base>
  )
}

export default Home
