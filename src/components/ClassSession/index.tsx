import {
  Text,
  Flex,
  Box,
  AlertIcon,
  Alert,
  Icon,
  VStack
} from '@chakra-ui/react'
import { ClassContent } from 'components/ClassItem'

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

const ClassSession = ({ data, dataType, icon, color }: ClassSessionProps) => {
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
            colorScheme={color}
            color="gray.900"
            fontSize="smaller"
            borderRadius={50}
          >
            <AlertIcon />
            Sem {dataType} nesta aula!
          </Alert>
        )}
      </Box>
    </VStack>
  )
}

export default ClassSession
