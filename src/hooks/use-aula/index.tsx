import React, { createContext, useContext } from 'react'
import { useSession } from 'next-auth/client'
import { useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_AULA,
  MUTATION_DELETE_AULA
} from 'graphql/mutations/aula'
import {
  MutationCreateAula,
  MutationCreateAulaVariables
} from 'graphql/generated/MutationCreateAula'
import {
  MutationDeleteAula,
  MutationDeleteAulaVariables
} from 'graphql/generated/MutationDeleteAula'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { QUERY_USER_BY_ID } from 'graphql/queries/user'

export type AulaPayload = {
  idTurma: string
  title: string
  description: string
}

export type AulaContextData = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  addAula: (data: AulaPayload) => void
}

export const AulaContextDefaultValues = {
  isOpen: false,
  onOpen: () => null,
  onClose: () => null,
  addAula: () => null
}

export type AulaProviderProps = {
  children: React.ReactNode
}

export const AulaContext = createContext<AulaContextData>(
  AulaContextDefaultValues
)

const AulaProvider = ({ children }: AulaProviderProps) => {
  const [session] = useSession()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const [createAula, { loading: loadingCreateAula }] = useMutation<
    MutationCreateAula,
    MutationCreateAulaVariables
  >(MUTATION_CREATE_AULA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_USER_BY_ID,
        context: { session },
        variables: {
          id: (session as SessionProps)?.id
        }
      }
    ]
  })

  const addAula = (data: AulaPayload) => {
    createAula({
      variables: {
        title: data.title,
        description: data.description,
        idTurma: data.idTurma
      }
    })
      .then(({ data }) => {
        toast({
          title: `A aula ${data?.createAula?.aula?.title} foi cadastrada 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
        onClose()
        return
      })
      .catch((error) => {
        toast({
          title: `Não foi possível cadastrar esta aula 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
        onClose()
      })
  }

  return (
    <AulaContext.Provider
      value={{
        isOpen,
        onClose,
        onOpen,
        addAula
      }}
    >
      {children}
    </AulaContext.Provider>
  )
}

const useAula = () => useContext(AulaContext)

export { AulaProvider, useAula }
