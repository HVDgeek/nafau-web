import {
  Text,
  Box,
  Flex,
  Icon,
  Progress,
  Tag,
  TagLabel,
  Avatar,
  Badge,
  useBreakpointValue
} from '@chakra-ui/react'
import themes from 'styles/alt-themes'
import { stringToColour } from 'utils/stringToColor'
import { shade } from 'polished'
import { IoMdSchool } from 'react-icons/io'
import { AiOutlineRight } from 'react-icons/ai'
import Button from 'components/Button'

type TeacherProps = {
  name: string
  avatar: string
}

type LastLesson = {
  lessonNumber: number
  title: string
}

export type ClassCardProps = {
  title: string
  code?: string
  status: 'EMCURSO' | 'PAUSE' | 'ENCERRADA'
  teacher: TeacherProps
  lastLesson?: LastLesson
  countAlunos: number
  timing?: number
}

const ClassCard = ({
  title,
  code,
  status,
  teacher,
  countAlunos,
  timing,
  lastLesson
}: ClassCardProps) => {
  const color = shade(0.7, stringToColour(title))
  const width = useBreakpointValue({
    base: '300px',
    md: '700px'
  })

  const sizeButton = useBreakpointValue({
    base: 'xs',
    md: 'sm'
  })

  return (
    <Flex
      position="relative"
      maxW={width}
      w={'full'}
      flexDir={['column', 'row']}
      bg="gray.800"
      boxShadow={'2xl'}
      borderRadius={themes.border.radius}
      h={[350, 150]}
    >
      <Box
        borderTopStartRadius={themes.border.radius}
        borderBottomLeftRadius={[0, themes.border.radius]}
        borderTopRightRadius={[themes.border.radius, 0]}
        bg={color}
        maxW="300px"
        flex="1"
        p={4}
        position="relative"
      >
        <Text fontSize="small" color="gray.300">
          TURMA
        </Text>

        <Text noOfLines={[3, 3]} fontSize={['small', 'sm']}>
          {title} - {code}
        </Text>
        <Icon position="absolute" right={2} top={2} as={IoMdSchool} />
        <Box position="absolute" left={4} bottom={2}>
          <Badge
            fontSize="x-small"
            variant="outline"
            colorScheme={
              status === 'EMCURSO'
                ? 'green'
                : status === 'PAUSE'
                ? 'yellow'
                : 'orange'
            }
          >
            {status === 'EMCURSO'
              ? 'EM CURSO'
              : status === 'PAUSE'
              ? 'PAUSE'
              : 'ENCERRADA'}
          </Badge>
        </Box>

        <Text
          position="absolute"
          right={2}
          bottom={2}
          fontSize={['x-small', 'small']}
          color="gray.300"
        >
          {countAlunos} Inscritos
        </Text>
      </Box>
      <Box
        borderTopEndRadius={themes.border.radius}
        borderBottomEndRadius={themes.border.radius}
        flex="1"
      >
        {lastLesson?.title ? (
          <Box position="absolute" pl={4} top={[200, 2]}>
            <Text fontSize="x-small" color="gray.300">
              AULA {lastLesson?.lessonNumber}
            </Text>
            <Text fontSize="x-small" noOfLines={[2]} pr={4}>
              {lastLesson?.title}
            </Text>
          </Box>
        ) : (
          <Box position="absolute" pl={4} top={4}>
            <Text fontSize="x-small" color="gray.300">
              SEM CONTEÚDO
            </Text>
          </Box>
        )}
        <Box position="absolute" pl={4} bottom={4}>
          <Text fontSize="x-small" color="gray.300">
            PROFESSOR
          </Text>
          <Box w={250}>
            <Tag mt={2} mW={200} size="md" bg={color} borderRadius="full">
              <Avatar
                src={teacher?.avatar}
                size="2xs"
                name={teacher.name}
                ml={-1}
                mr={2}
              />
              <TagLabel
                isTruncated
                color="white"
                fontSize="x-small"
                fontWeight="normal"
              >
                {teacher.name}
              </TagLabel>
            </Tag>
          </Box>
        </Box>

        <Box position="absolute" right={4} top={[200, 2]}>
          <Progress w={100} value={timing} size="xs" colorScheme="purple" />
          <Text textAlign="end" fontSize="x-small" color="gray.300">
            {timing}%
          </Text>
        </Box>

        <Box position="absolute" right={0} bottom={0} p={4}>
          <Button size={sizeButton} rightIcon={<Icon as={AiOutlineRight} />}>
            Acessar
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default ClassCard
