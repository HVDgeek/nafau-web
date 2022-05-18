import {
  Text,
  Box,
  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Stack,
  Avatar,
  AvatarBadge,
  AvatarGroup
} from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import * as S from './style'
import { Icon } from '@chakra-ui/react'
import {
  FaBookReader,
  FaUsers,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaBookOpen
} from 'react-icons/fa'

import ChartRegisterUsers from '../../components/dashboard/Charts/RegisteredUsers'
import DailyReport from '../../components/dashboard/Charts/DailyReport'

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

        <Box mt={8}>
          <Heading lineLeft>STUDENT</Heading>
        </Box>

        <SimpleGrid mt={5} mb={5} flex="1" gap="6" minChildWidth="150px">
          <Box
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            bg="#3498DB"
            borderRadius={8}
          >
            <Text fontSize="36px" fontWeight="bold">
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
            <Text fontSize="36px" fontWeight="bold">
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
            <Text fontSize="36px" fontWeight="bold">
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
            <Text fontSize="36px" fontWeight="bold">
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
            <Text fontSize="36px" fontWeight="bold">
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
            <Text fontSize="36px" fontWeight="bold">
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
          <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="md" mb="4">
              Calendário
            </Text>
          </Box>
        </SimpleGrid>

        {/* <S.BoxRow>
          <S.NewCard style={{ border: '1px solid #50a7ff' }}>
            <StatGroup justifyContent="center" alignItems="center">
              <Stat>
                <StatLabel>Alunos</StatLabel>
                <StatNumber>45,67</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  15.36%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Professores</StatLabel>
                <StatNumber>20</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Gerentes</StatLabel>
                <StatNumber>7,45</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </S.NewCard>
          <S.NewCard style={{ background: '#50a7ff' }}>
            Em desenvolvimento
          </S.NewCard>
          <S.NewCard style={{ background: '#50a7ff' }}>
            Em desenvolvimento
          </S.NewCard>
        </S.BoxRow> */}

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

        <Box mt={8}>
          <Heading lineLeft>TEACHERS</Heading>
        </Box>

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
                Número de Inscritos
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
                Tempo na Plataforma
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
                Número de Inscritos
              </Text>
              <Text color="#fff" fontSize="25px" fontWeight={700}>
                250
              </Text>
            </Box>
          </Box>
          {/* <Box p={['1', '8']} bg="gray.800" borderRadius={8}>
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
                Número de Inscritos
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
                Número de Inscritos
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
                Número de Inscritos
              </Text>
              <Text color="#fff" fontSize="25px" fontWeight={700}>
                50
              </Text>
            </Box>
          </Box> */}
        </SimpleGrid>

        <S.MainCards>
          <S.Cards>
            <Icon fontSize="40px" color="#50a7ff" as={FaUsers} />
            <S.CardInner>
              <S.CardInnerText>Número de Inscritos</S.CardInnerText>
              <S.CardInnerSpan>576</S.CardInnerSpan>
            </S.CardInner>
          </S.Cards>

          <S.Cards>
            <Icon fontSize="40px" color="#F39C12" as={FaCalendarAlt} />
            <S.CardInner>
              <S.CardInnerText>Tempo na Plataforma</S.CardInnerText>
              <S.CardInnerSpan>32</S.CardInnerSpan>
            </S.CardInner>
          </S.Cards>

          <S.Cards>
            <Icon fontSize="40px" color="#9B59B6" as={FaUsers} />
            <S.CardInner>
              <S.CardInnerText>Número de Inscritos</S.CardInnerText>
              <S.CardInnerSpan>576</S.CardInnerSpan>
            </S.CardInner>
          </S.Cards>

          <S.Cards>
            <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
            <S.CardInner>
              <S.CardInnerText>Número de Inscritos</S.CardInnerText>
              <S.CardInnerSpan>576</S.CardInnerSpan>
            </S.CardInner>
          </S.Cards>
        </S.MainCards>

        <S.BoxRow>
          <S.NewCardContent>Em desenvolvimento</S.NewCardContent>
        </S.BoxRow>

        <Box mt={8}>
          <Heading lineLeft>MANAGER</Heading>
        </Box>

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
      </Container>
    </Base>
  )
}

export default Home
