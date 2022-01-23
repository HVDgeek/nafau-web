import {
  Text,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  VStack,
  Alert
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { AiOutlineFile, AiOutlineLink } from 'react-icons/ai'
import { FaMusic, FaVideo, FaPlus } from 'react-icons/fa'
import { BiTask } from 'react-icons/bi'
import Button from 'components/Button'
import themes from 'styles/alt-themes'
import { shade } from 'polished'
import ClassSession, { ClassSessionTitle } from 'components/ClassSession'
import TextContent from 'components/TextContent'
import { formateDate } from 'utils/formatDate'
import { useAula } from 'hooks/use-aula'

export type ClassContent = {
  id: string
  title: string
  description?: string
  url: string
}

export type ClassItemProps = {
  id: string
  title: string
  description?: string
  videos?: ClassContent[]
  audios?: ClassContent[]
  files?: ClassContent[]
  links?: ClassContent[]
  updated_at?: string
  setIdAula: (id: string) => void
  setIdItem: (id: string) => void
}

const ClassItem = ({
  id,
  title,
  description,
  videos,
  audios,
  files,
  links,
  updated_at,
  setIdAula,
  setIdItem
}: ClassItemProps) => {
  const { onOpenLinkToAula, onOpenRemoveLinkToAula } = useAula()
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
                <Text fontWeight="medium" fontSize={['sm', 'md']}>
                  🚀 {title}
                </Text>
                <Text mt={2} fontSize="small" color="gray.300">
                  Modificada em {formateDate(updated_at!)}
                </Text>
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
                onOpenModal={() => null}
                onOpenRemoveModal={() => null}
              />
              <ClassSession
                data={links!}
                color="blue"
                dataType="Links úteis"
                icon={AiOutlineLink}
                onOpenModal={() => {
                  setIdAula(id)
                  onOpenLinkToAula()
                }}
                onOpenRemoveModal={(idItem) => {
                  setIdAula(id)
                  setIdItem(idItem)
                  onOpenRemoveLinkToAula()
                }}
              />
              <ClassSession
                data={videos!}
                color="orange"
                dataType="Vídeos"
                icon={FaVideo}
                onOpenModal={() => null}
                onOpenRemoveModal={() => null}
              />
              <ClassSession
                data={audios!}
                color="yellow"
                dataType="Áudios"
                icon={FaMusic}
                onOpenModal={() => null}
                onOpenRemoveModal={() => null}
              />
              <VStack>
                <ClassSessionTitle title="Tarefas" color="pink.300">
                  <Icon as={BiTask} color="pink.300" />
                </ClassSessionTitle>
                <Box>
                  <Alert
                    height={8}
                    status="warning"
                    // colorScheme="pink"
                    bg="gray.900"
                    color="gray.200"
                    fontSize="smaller"
                    borderRadius={50}
                  >
                    Nenhuma tarefa nesta aula!
                  </Alert>
                </Box>
                <Button size="xs" leftIcon={<Icon as={FaPlus} />}>
                  Adicionar Tarefas
                </Button>
              </VStack>
            </VStack>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

export default ClassItem
