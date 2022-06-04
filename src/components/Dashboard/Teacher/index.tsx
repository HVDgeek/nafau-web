import React from 'react'
import {
  Text,
  Box,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  AvatarGroup
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaUsers, FaCalendarAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import * as S from '../../../templates/Home/style'
import DailyReport from '../Charts/DailyReport'
import ChartRegisterUsers from '../../Dashboard/Charts/RegisteredUsers'

function Teacher() {
  return (
    <>
      <SimpleGrid
        mt={5}
        mb={5}
        flex="1"
        gap="4"
        minChildWidth="150px"
        align="flex-start"
      >
        <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
          <Icon fontSize="40px" color="#50a7ff" as={FaUsers} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text
              color="#a5aaad"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
            >
              DISCIPLINAS
            </Text>
            <Text color="#fff" fontSize="25px" fontWeight={700}>
              576
            </Text>
          </Box>
        </Box>
        <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
          <Icon fontSize="40px" color="#F39C12" as={FaCalendarAlt} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text
              color="#a5aaad"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
            >
              TAREFAS
            </Text>
            <Text color="#fff" fontSize="25px" fontWeight={700}>
              32
            </Text>
          </Box>
        </Box>
        <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
          <Icon fontSize="40px" color="#9B59B6" as={FaUsers} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text
              color="#a5aaad"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
            >
              MATERIAIS
            </Text>
            <Text color="#fff" fontSize="25px" fontWeight={700}>
              250
            </Text>
          </Box>
        </Box>
        <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
          <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text
              color="#a5aaad"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
            >
              AVISOS
            </Text>
            <Text color="#fff" fontSize="25px" fontWeight={700}>
              100
            </Text>
          </Box>
        </Box>
        <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
          <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text
              color="#a5aaad"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
            >
              FORUM
            </Text>
            <Text color="#fff" fontSize="25px" fontWeight={700}>
              10
            </Text>
          </Box>
        </Box>
        <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
          <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={3}
          >
            <Text
              color="#a5aaad"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
            >
              NOTAS
            </Text>
            <Text color="#fff" fontSize="25px" fontWeight={700}>
              50
            </Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        mt={5}
        mb={5}
        flex="1"
        gap="4"
        minChildWidth="280px"
        align="flex-start"
      >
        <Box
          p={['4', '8']}
          bg="gray.800"
          borderRadius={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize="md" mb="4">
            Calendário
          </Text>
        </Box>

        <Box
          p={['4', '8']}
          bg="gray.800"
          borderRadius={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <S.Number>678</S.Number>
          <Text fontSize="md" mb="4">
            Alunos Online
          </Text>
          <AvatarGroup size="md" max={6}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
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
            Inscritos da semana
          </Text>
          <ChartRegisterUsers />
          <ChartRegisterUsers />
        </Box>
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Relatório Diário
          </Text>
          <DailyReport />
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
        </Box>
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Colaboradores
          </Text>
        </Box>
        <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
          <Text fontSize="md" mb="4">
            Radar Chart
          </Text>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Teacher
