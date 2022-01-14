import dynamic from 'next/dynamic'
import {
  Text,
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Stack
} from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import theme from 'styles/alt-themes'
import { ApexOptions } from 'apexcharts'
import Base from 'templates/Base'
import { useSession } from 'next-auth/client'
import * as S from './style'
import { Icon } from '@chakra-ui/react'
import {
  FaBookReader,
  FaUsers,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaBookOpen
} from 'react-icons/fa'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    // desabilita a barra de ferramentas
    toolbar: {
      show: false
    },
    // desabilita o zoom
    zoom: {
      enabled: false
    },
    // Cor dos textos y, x
    foreColor: theme.colors.gray
  },
  // Desabilita os grids
  grid: {
    show: false
  },
  // Textos nas linhas do gráfico
  dataLabels: {
    enabled: false
  },
  // quando o usuário para o mouse
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.darkGray
    },
    axisTicks: {
      color: theme.colors.darkGray
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 16, 109] }]

const Home = () => {
  const [session] = useSession()
  return (
    <Base>
      <Container>
        <S.MainTitle>
          <S.HelloImage
            src="https://user-images.githubusercontent.com/87288949/137050624-a4e7733f-499a-4f53-8ac1-915bdac4df12.png"
            alt="Hello"
          />
          <S.MainGreeting>
            <Stack spacing={3}>
              <Heading>Olá, {session?.user?.name}</Heading>
              <Text fontSize="sm">Seja Bem Vindo à Platatafoma NAFAU</Text>
            </Stack>
          </S.MainGreeting>
        </S.MainTitle>

        <Box mt={8}>
          <Heading lineLeft>Resumo</Heading>
        </Box>

        <Box mt={8}>
          <Heading lineLeft>STUDENT</Heading>
        </Box>

        <S.BoxRow>
          <S.Card style={{ background: '#3498DB', marginRight: 10 }}>
            <S.Number>5</S.Number>
            <S.Title>DISCIPLINAS</S.Title>
          </S.Card>
          <S.Card style={{ background: '#F1C40F', marginRight: 10 }}>
            <S.Number>7</S.Number>
            <S.Title>TAREFAS</S.Title>
          </S.Card>
          <S.Card style={{ background: '#2ECC71', marginRight: 10 }}>
            <S.Number>8</S.Number>
            <S.Title>MATERIAIS</S.Title>
          </S.Card>
          <S.Card style={{ background: '#9B59B6', marginRight: 10 }}>
            <S.Number>2</S.Number>
            <S.Title>AVISOS</S.Title>
          </S.Card>
          <S.Card style={{ background: '#34495E', marginRight: 10 }}>
            <S.Number>5</S.Number>
            <S.Title>FORUM</S.Title>
          </S.Card>
          <S.Card style={{ background: '#F39C12' }}>
            <S.Number>3</S.Number>
            <S.Title>NOTAS</S.Title>
          </S.Card>
        </S.BoxRow>

        <SimpleGrid
          m={2}
          flex="1"
          gap="4"
          minChildWidth="320px"
          align="flex-start"
        >
          <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="md" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="md" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={['4', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="md" mb="4">
              Calendário
            </Text>
          </Box>
        </SimpleGrid>

        <S.BoxRow>
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
        </S.BoxRow>

        <Box mt={8}>
          <Heading lineLeft>TEACHERS</Heading>
        </Box>

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
