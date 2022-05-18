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
import {
  FaUsers,
  FaBookReader,
  FaBookOpen,
  FaMoneyCheckAlt
} from 'react-icons/fa'
import * as S from '../../../templates/Home/style'
import DailyReport from '../Charts/DailyReport'
import ChartRegisterUsers from '../../Dashboard/Charts/RegisteredUsers'

function Manager() {
  return (
    <>
      <S.MainCards>
        <S.Cards>
          <Icon fontSize="40px" color="#50a7ff" as={FaBookReader} />
          <S.CardInner>
            <S.CardInnerText>Estudantes</S.CardInnerText>
            <S.CardInnerSpan>1245</S.CardInnerSpan>
          </S.CardInner>
        </S.Cards>

        <S.Cards>
          <Icon fontSize="40px" color="#F39C12" as={FaUsers} />
          <S.CardInner>
            <S.CardInnerText>Colaboradores</S.CardInnerText>
            <S.CardInnerSpan>239</S.CardInnerSpan>
          </S.CardInner>
        </S.Cards>

        <S.Cards>
          <Icon fontSize="40px" color="#9B59B6" as={FaBookOpen} />
          <S.CardInner>
            <S.CardInnerText>Cursos</S.CardInnerText>
            <S.CardInnerSpan>576</S.CardInnerSpan>
          </S.CardInner>
        </S.Cards>

        <S.Cards>
          <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
          <S.CardInner>
            <S.CardInnerText>Receita</S.CardInnerText>
            <S.CardInnerSpan>15.235.568</S.CardInnerSpan>
          </S.CardInner>
        </S.Cards>
      </S.MainCards>

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

      <S.BoxRow>
        <S.NewCardContent>Em desenvolvimento</S.NewCardContent>
      </S.BoxRow>
    </>
  )
}

export default Manager
