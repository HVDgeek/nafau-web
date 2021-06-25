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
import { BiTask } from 'react-icons/bi'
import themes from 'styles/alt-themes'
import { shade } from 'polished'
import ClassSession, { ClassSessionTitle } from 'components/ClassSession'
import TextContent from 'components/TextContent'

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
            {!!description && <TextContent>{description}</TextContent>}
            <VStack mt={6} spacing={6}>
              <ClassSession
                data={files!}
                color="green"
                dataType="Arquivos"
                icon={AiOutlineFile}
              />
              <ClassSession
                data={links!}
                color="blue"
                dataType="Links úteis"
                icon={AiOutlineLink}
              />
              <ClassSession
                data={videos!}
                color="orange"
                dataType="Vídeos"
                icon={RiVideoLine}
              />
              <ClassSession
                data={audios!}
                color="yellow"
                dataType="Áudios"
                icon={FaFileAudio}
              />

              <ClassSessionTitle title="Tarefas" color="pink.300">
                <Icon as={BiTask} color="pink.300" />
              </ClassSessionTitle>
              <Box>
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
              </Box>
            </VStack>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

export default ClassItem
