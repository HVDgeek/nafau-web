import { Text, Flex, Box, Alert, Icon, VStack } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { ClassContent } from 'components/ClassItem'
import LessonItem from 'components/LessonItem'
import Button from 'components/Button'
import { useAula } from 'hooks/use-aula'

export type ClassSessionTitleProps = {
  children: React.ReactNode
  title?: string
  color?: string
  fontWeight?: string
}

export type ClassSessionProps = {
  data: ClassContent[]
  dataType: 'Arquivos' | 'Áudios' | 'Vídeos' | 'Tarefas' | 'Links úteis'
  icon: React.ReactNode | any
  color: string
  onOpenModal: () => void
  onOpenRemoveModal: (id: string) => void
}

export const ClassSessionTitle = ({
  children,
  title,
  color,
  fontWeight
}: ClassSessionTitleProps) => {
  return (
    <Flex alignItems="center">
      {children}
      <Text ml={2} color={color} fontWeight={fontWeight}>
        {title}
      </Text>
    </Flex>
  )
}

const ClassSession = ({
  data,
  dataType,
  icon,
  color,
  onOpenModal,
  onOpenRemoveModal
}: ClassSessionProps) => {
  return (
    <VStack>
      <ClassSessionTitle title={dataType} color={`${color}.300`}>
        <Icon as={icon} color={`${color}.300`} />
      </ClassSessionTitle>
      <Box>
        {!data?.length && (
          <Alert
            height={8}
            status="warning"
            // colorScheme={color}
            bg="gray.900"
            color="gray.200"
            fontSize="smaller"
            borderRadius={50}
          >
            Sem {dataType} nesta aula!
          </Alert>
        )}
        {data.map((item) => (
          <VStack key={item.id}>
            <LessonItem
              {...item}
              dataType={dataType}
              onOpenRemoveModal={() => onOpenRemoveModal(item.id)}
            />
          </VStack>
        ))}
      </Box>
      <Box />
      <Button onClick={onOpenModal} size="xs" leftIcon={<Icon as={FaPlus} />}>
        Adicionar {dataType}
      </Button>
    </VStack>
  )
}

export default ClassSession
