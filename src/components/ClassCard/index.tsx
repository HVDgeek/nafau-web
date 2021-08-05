import Link from 'next/link'
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
  Tooltip,
  useBreakpointValue
} from '@chakra-ui/react'
import themes from 'styles/alt-themes'
import { stringToColour } from 'utils/stringToColor'
import { shade } from 'polished'
import { IoMdSchool } from 'react-icons/io'
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai'
import Button from 'components/Button'
import IconButton from 'components/IconButton'

type TeacherProps = {
  name: string
  avatar: string
}

type LastLesson = {
  title: string
}

export type ClassCardProps = {
  id: string
  title: string
  code?: string
  status: 'EMCURSO' | 'PAUSE' | 'ENCERRADA'
  teacher: TeacherProps
  lastLesson?: LastLesson
  countAlunos: number
  route?: string
  timing?: number
  onRemove?: () => void
}

const ClassCard = ({
  id,
  title,
  code,
  status,
  teacher,
  countAlunos,
  lastLesson,
  route,
  onRemove
}: ClassCardProps) => {
  const color = shade(0.7, stringToColour(title))

  const sizeButton = useBreakpointValue({
    base: 'xs',
    md: 'sm'
  })

  return (
    <Flex
      position="relative"
      maxWidth={['300px', '700px']}
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
          {countAlunos} Alunos
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
              ÚLTIMA AULA
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
            <Tag mt={2} maxWidth={200} size="md" bg={color} borderRadius="full">
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

        {/* <Box position="absolute" right={4} top={[200, 2]}>
          <Progress w={100} value={timing} size="xs" colorScheme="purple" />
          <Text textAlign="end" fontSize="x-small" color="gray.300">
            {timing}%
          </Text>
        </Box> */}

        <Box position="absolute" right={0} bottom={0} p={4}>
          <Link href={`/manager/${route}/${id}`} passHref>
            <Button as="a" size={'xs'} rightIcon={<Icon as={AiOutlineRight} />}>
              Acessar
            </Button>
          </Link>
        </Box>
      </Box>
      <Tooltip
        fontSize="small"
        label="Remover esta turma!"
        aria-label="A tooltip"
      >
        <Box p={2} position="absolute" top={0} right={0}>
          <IconButton onClick={onRemove} ariaLabel="Remover turma">
            <AiOutlineClose size={18} />
          </IconButton>
        </Box>
      </Tooltip>
    </Flex>
  )
}

export default ClassCard
