import React from 'react'
import {
  Text,
  Box,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  AvatarGroup
} from '@chakra-ui/react'
import ChartRegisterUsers from '../../Dashboard/Charts/RegisteredUsers'
import * as S from '../../../templates/Home/style'

import Something from '../Geral/dashboardColabGrafico'
import Something2 from '../Geral/dashboardGeralGrafico'
import Something3 from '../Geral/dashboardRadarGrafico'

function Student() {
  return (
    <>
      <SimpleGrid mt={5} mb={5} flex="1" gap="4" minChildWidth="150px">
        <Box
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="#3498DB"
          borderRadius={8}
        >
          <Text fontSize="42px" fontWeight="bold">
            5
          </Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="18px"
            mb="4"
          >
            disciplinas
          </Text>
        </Box>
        <Box
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="#F39C12"
          borderRadius={8}
        >
          <Text fontSize="42px" fontWeight="bold">
            7
          </Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="18px"
            mb="4"
          >
            tarefas
          </Text>
        </Box>
        <Box
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="#2ECC71"
          borderRadius={8}
        >
          <Text fontSize="42px" fontWeight="bold">
            8
          </Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="18px"
            mb="4"
          >
            materiais
          </Text>
        </Box>
        <Box
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="#9B59B6"
          borderRadius={8}
        >
          <Text fontSize="42px" fontWeight="bold">
            2
          </Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="18px"
            mb="4"
          >
            avisos
          </Text>
        </Box>
        <Box
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="#34495E"
          borderRadius={8}
        >
          <Text fontSize="42px" fontWeight="bold">
            5
          </Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="18px"
            mb="4"
          >
            forum
          </Text>
        </Box>
        <Box
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="#F1C40F"
          borderRadius={8}
        >
          <Text fontSize="42px" fontWeight="bold">
            3
          </Text>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="18px"
            mb="4"
          >
            notas
          </Text>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        mt={5}
        mb={5}
        flex="1"
        gap="4"
        minChildWidth="320px"
        align="flex-start"
      >
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Inscritos da semana
          </Text>
          <ChartRegisterUsers />
        </Box>
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Taxa de abertura
          </Text>
          <ChartRegisterUsers />
        </Box>
        <Box
          p={['4', '8']}
          bg="gray.800"
          borderRadius={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <S.Number color="yellow">56</S.Number>
          <Text fontSize="md" mb="4">
            Professores Online
          </Text>
          <AvatarGroup size="md" max={6}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        mt={5}
        mb={5}
        flex="1"
        gap="4"
        minChildWidth="320px"
        align="flex-start"
      >
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Registro de usuários por dia
          </Text>
          <Something2 />
        </Box>
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Colaboradores
          </Text>
          <Something />
        </Box>
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Radar Chart
          </Text>
          <Something3 />
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Student
