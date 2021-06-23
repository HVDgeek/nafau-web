import {
  Text,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  VStack,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { AiOutlineFile, AiOutlineLink } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import { FaFileAudio } from 'react-icons/fa'
import themes from 'styles/alt-themes'
import { shade } from 'polished'
import ClassSession from 'components/ClassSession'

export type ClassContent = {
  title: string
  description?: string
  url?: string
}

export type ClassItemProps = {
  title: string
  description?: string
  videos?: ClassContent[]
  audios?: ClassContent[]
  files?: ClassContent[]
  links?: ClassContent[]
}

const ClassItem = ({
  title,
  description,
  videos,
  audios,
  files,
  links
}: ClassItemProps) => {
  return (
    <AccordionItem
      backgroundColor="gray.800"
      borderRadius={themes.border.radius}
      border={`1px solid ${shade(0.5, themes.colors.primary)}`}
      boxShadow={'2xl'}
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton _focus={{ shadow: 'none' }}>
              <Box flex="1" textAlign="left">
                <Text>🚀 {title}</Text>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize="sm">{description}</Text>
            <VStack mt={6} spacing={6}>
              <ClassSession title="Arquivos" color="green.300">
                <Icon as={AiOutlineFile} color="green.300" />
              </ClassSession>
              <Box>
                {!files?.length && (
                  <Alert
                    height={8}
                    status="warning"
                    colorScheme="green"
                    color="gray.900"
                    fontSize="smaller"
                    borderRadius={50}
                  >
                    <AlertIcon />
                    Sem arquivos nesta aula!
                  </Alert>
                )}
              </Box>
              <ClassSession title="Links úteis" color="blue.300">
                <Icon as={AiOutlineLink} color="blue.300" />
              </ClassSession>
              <Box>
                <Box>
                  {!files?.length && (
                    <Alert
                      height={8}
                      status="warning"
                      colorScheme="blue"
                      color="gray.900"
                      fontSize="smaller"
                      borderRadius={50}
                    >
                      <AlertIcon />
                      Sem links úteis nesta aula!
                    </Alert>
                  )}
                </Box>
              </Box>
              <ClassSession title="Vídeos" color="orange.300">
                <Icon as={RiVideoLine} color="orange.300" />
              </ClassSession>
              <Box>
                {!files?.length && (
                  <Alert
                    height={8}
                    status="warning"
                    colorScheme="orange"
                    color="gray.900"
                    fontSize="smaller"
                    borderRadius={50}
                  >
                    <AlertIcon />
                    Sem vídeos nesta aula!
                  </Alert>
                )}
              </Box>
              <ClassSession title="Áudios" color="yellow.300">
                <Icon as={FaFileAudio} color="yellow.300" />
              </ClassSession>
              <Box>
                {!files?.length && (
                  <Alert
                    height={8}
                    status="warning"
                    colorScheme="yellow"
                    color="gray.900"
                    fontSize="smaller"
                    borderRadius={50}
                  >
                    <AlertIcon />
                    Sem áudios nesta aula!
                  </Alert>
                )}
              </Box>
              <ClassSession title="Tarefas" color="pink.300">
                <Icon as={FaFileAudio} color="pink.300" />
              </ClassSession>
              <Box>
                {!files?.length && (
                  <Alert
                    height={8}
                    status="warning"
                    colorScheme="pink"
                    color="gray.900"
                    fontSize="smaller"
                    borderRadius={50}
                  >
                    <AlertIcon />
                    Nenhuma tarefa nesta aula!
                  </Alert>
                )}
              </Box>
            </VStack>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

export default ClassItem
