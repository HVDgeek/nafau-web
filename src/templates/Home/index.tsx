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
import * as C from './style'
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
  return (
    <Base>
      <Container>
        <C.MainTitle>
          <C.HelloImage
            src="https://user-images.githubusercontent.com/87288949/137050624-a4e7733f-499a-4f53-8ac1-915bdac4df12.png"
            alt="Hello"
          />
          <C.MainGreeting>
            <Stack spacing={3}>
              <Heading>Olá, Wilson Dos Santos</Heading>
              <Text fontSize="sm">Seja Bem Vindo à Platatafoma NAFAU</Text>
            </Stack>
          </C.MainGreeting>
        </C.MainTitle>

        <Box mt={8}>
          <Heading lineLeft>Resumo</Heading>
        </Box>

        <Box mt={8}>
          <Heading lineLeft>STUDENT</Heading>
        </Box>

        <C.BoxRow>
          <C.Card style={{ background: '#3498DB', marginRight: 10 }}>
            <C.Number>5</C.Number>
            <C.Title>DISCIPLINAS</C.Title>
          </C.Card>
          <C.Card style={{ background: '#F1C40F', marginRight: 10 }}>
            <C.Number>7</C.Number>
            <C.Title>TAREFAS</C.Title>
          </C.Card>
          <C.Card style={{ background: '#2ECC71', marginRight: 10 }}>
            <C.Number>8</C.Number>
            <C.Title>MATERIAIS</C.Title>
          </C.Card>
          <C.Card style={{ background: '#9B59B6', marginRight: 10 }}>
            <C.Number>2</C.Number>
            <C.Title>AVISOS</C.Title>
          </C.Card>
          <C.Card style={{ background: '#34495E', marginRight: 10 }}>
            <C.Number>5</C.Number>
            <C.Title>FORUM</C.Title>
          </C.Card>
          <C.Card style={{ background: '#F39C12' }}>
            <C.Number>3</C.Number>
            <C.Title>NOTAS</C.Title>
          </C.Card>
        </C.BoxRow>

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

        <C.BoxRow>
          <C.NewCard style={{ border: '1px solid #50a7ff' }}>
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
          </C.NewCard>
          <C.NewCard style={{ background: '#50a7ff' }}>
            Em desenvolvimento
          </C.NewCard>
          <C.NewCard style={{ background: '#50a7ff' }}>
            Em desenvolvimento
          </C.NewCard>
        </C.BoxRow>

        <Box mt={8}>
          <Heading lineLeft>TEACHERS</Heading>
        </Box>

        <C.MainCards>
          <C.Cards>
            <Icon fontSize="40px" color="#50a7ff" as={FaUsers} />
            <C.CardInner>
              <C.CardInnerText>Número de Inscritos</C.CardInnerText>
              <C.CardInnerSpan>576</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>

          <C.Cards>
            <Icon fontSize="40px" color="#F39C12" as={FaCalendarAlt} />
            <C.CardInner>
              <C.CardInnerText>Tempo na Plataforma</C.CardInnerText>
              <C.CardInnerSpan>32</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>

          <C.Cards>
            <Icon fontSize="40px" color="#9B59B6" as={FaUsers} />
            <C.CardInner>
              <C.CardInnerText>Número de Inscritos</C.CardInnerText>
              <C.CardInnerSpan>576</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>

          <C.Cards>
            <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
            <C.CardInner>
              <C.CardInnerText>Número de Inscritos</C.CardInnerText>
              <C.CardInnerSpan>576</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>
        </C.MainCards>

        <C.BoxRow>
          <C.NewCardContent>Em desenvolvimento</C.NewCardContent>
        </C.BoxRow>

        <Box mt={8}>
          <Heading lineLeft>MANAGER</Heading>
        </Box>

        <C.MainCards>
          <C.Cards>
            <Icon fontSize="40px" color="#50a7ff" as={FaBookReader} />
            <C.CardInner>
              <C.CardInnerText>Estudantes</C.CardInnerText>
              <C.CardInnerSpan>1245</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>

          <C.Cards>
            <Icon fontSize="40px" color="#F39C12" as={FaUsers} />
            <C.CardInner>
              <C.CardInnerText>Colaboradores</C.CardInnerText>
              <C.CardInnerSpan>239</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>

          <C.Cards>
            <Icon fontSize="40px" color="#9B59B6" as={FaBookOpen} />
            <C.CardInner>
              <C.CardInnerText>Cursos</C.CardInnerText>
              <C.CardInnerSpan>576</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>

          <C.Cards>
            <Icon fontSize="40px" color="#2ECC71" as={FaMoneyCheckAlt} />
            <C.CardInner>
              <C.CardInnerText>Receita</C.CardInnerText>
              <C.CardInnerSpan>15.235.568</C.CardInnerSpan>
            </C.CardInner>
          </C.Cards>
        </C.MainCards>
      </Container>
    </Base>
  )
}

export default Home
