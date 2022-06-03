import React, { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useDisclosure, useToast } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_AULA,
  MUTATION_DELETE_AULA,
  MUTATION_UPDATE_AULA
} from 'graphql/mutations/aula'
import {
  MutationCreateAula,
  MutationCreateAulaVariables
} from 'graphql/generated/MutationCreateAula'
import {
  MutationDeleteAula,
  MutationDeleteAulaVariables
} from 'graphql/generated/MutationDeleteAula'
import {
  MutationUpdateAula,
  MutationUpdateAulaVariables
} from 'graphql/generated/MutationUpdateAula'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { QUERY_AULAS } from 'graphql/queries/aulas'
import { Base64 } from 'js-base64'

export type DataPayload = {
  title: string
  url: string
  description: string
}
export type PayloadProps = {
  data: DataPayload[]
}

export type AulaPayload = {
  idTurma: string
  title: string
  description: string
  idAula: string
}

export type AulaContextData = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  isOpenLinkToAula: boolean
  onOpenLinkToAula: () => void
  onCloseLinkToAula: () => void
  isOpenRemoveLinkToAula: boolean
  onOpenRemoveLinkToAula: () => void
  onCloseRemoveLinkToAula: () => void
  isOpenVideoToAula: boolean
  onOpenVideoToAula: () => void
  onCloseVideoToAula: () => void
  isOpenRemoveVideoToAula: boolean
  onOpenRemoveVideoToAula: () => void
  onCloseRemoveVideoToAula: () => void
  isOpenAudioToAula: boolean
  onOpenAudioToAula: () => void
  onCloseAudioToAula: () => void
  isOpenRemoveAudioToAula: boolean
  onOpenRemoveAudioToAula: () => void
  onCloseRemoveAudioToAula: () => void
  addAula: (data: Omit<AulaPayload, 'idAula'>) => void
  removeAula: (data: Pick<AulaPayload, 'idAula'>) => void
  addLinkToAula: (aula: Pick<AulaPayload, 'idAula'>, data: PayloadProps) => void
  addVideoToAula: (
    aula: Pick<AulaPayload, 'idAula'>,
    data: PayloadProps
  ) => void
  addAudioToAula: (
    aula: Pick<AulaPayload, 'idAula'>,
    data: PayloadProps
  ) => void
}

export const AulaContextDefaultValues = {
  isOpen: false,
  onOpen: () => null,
  onClose: () => null,
  addAula: () => null,
  isOpenLinkToAula: false,
  onOpenLinkToAula: () => null,
  onCloseLinkToAula: () => null,
  isOpenRemoveLinkToAula: false,
  onOpenRemoveLinkToAula: () => null,
  onCloseRemoveLinkToAula: () => null,
  isOpenVideoToAula: false,
  onOpenVideoToAula: () => null,
  onCloseVideoToAula: () => null,
  isOpenRemoveVideoToAula: false,
  onOpenRemoveVideoToAula: () => null,
  onCloseRemoveVideoToAula: () => null,
  isOpenAudioToAula: false,
  onOpenAudioToAula: () => null,
  onCloseAudioToAula: () => null,
  isOpenRemoveAudioToAula: false,
  onOpenRemoveAudioToAula: () => null,
  onCloseRemoveAudioToAula: () => null,
  removeAula: () => null,
  addLinkToAula: () => null,
  addVideoToAula: () => null,
  addAudioToAula: () => null
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
  const {
    isOpen: isOpenLinkToAula,
    onOpen: onOpenLinkToAula,
    onClose: onCloseLinkToAula
  } = useDisclosure()

  const {
    isOpen: isOpenRemoveLinkToAula,
    onOpen: onOpenRemoveLinkToAula,
    onClose: onCloseRemoveLinkToAula
  } = useDisclosure()

  const {
    isOpen: isOpenVideoToAula,
    onOpen: onOpenVideoToAula,
    onClose: onCloseVideoToAula
  } = useDisclosure()

  const {
    isOpen: isOpenRemoveVideoToAula,
    onOpen: onOpenRemoveVideoToAula,
    onClose: onCloseRemoveVideoToAula
  } = useDisclosure()

  const {
    isOpen: isOpenAudioToAula,
    onOpen: onOpenAudioToAula,
    onClose: onCloseAudioToAula
  } = useDisclosure()

  const {
    isOpen: isOpenRemoveAudioToAula,
    onOpen: onOpenRemoveAudioToAula,
    onClose: onCloseRemoveAudioToAula
  } = useDisclosure()

  const toast = useToast()
  const router = useRouter()

  const [createAula, { loading: loadingCreateAula }] = useMutation<
    MutationCreateAula,
    MutationCreateAulaVariables
  >(MUTATION_CREATE_AULA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_AULAS,
        context: { session },
        variables: {
          limit: 200,
          idTurma:
            (router.query.id as string) &&
            Base64.decode(router.query.id as string)
        }
      }
    ]
  })

  const [deleteAula, { loading: loadingDeleteAula }] = useMutation<
    MutationDeleteAula,
    MutationDeleteAulaVariables
  >(MUTATION_DELETE_AULA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_AULAS,
        context: { session },
        variables: {
          limit: 200,
          idTurma:
            (router.query.id as string) &&
            Base64.decode(router.query.id as string)
        }
      }
    ]
  })

  const [updateAula, { loading: loadingUpdateAula }] = useMutation<
    MutationUpdateAula,
    MutationUpdateAulaVariables
  >(MUTATION_UPDATE_AULA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_AULAS,
        context: { session },
        variables: {
          limit: 200,
          idTurma:
            (router.query.id as string) &&
            Base64.decode(router.query.id as string)
        }
      }
    ]
  })

  const addAula = (data: Omit<AulaPayload, 'idAula'>) => {
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
  const removeAula = (data: Pick<AulaPayload, 'idAula'>) => {
    deleteAula({
      variables: {
        idAula: data.idAula
      }
    })
      .then(({ data }) => {
        toast({
          title: `A aula ${data?.deleteAula?.aula?.title} foi removida 😃`,
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
          title: `Não foi possível remover esta aula 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
        onClose()
      })
  }

  const addLinkToAula = (
    { idAula }: Pick<AulaPayload, 'idAula'>,
    { data }: PayloadProps
  ) => {
    updateAula({
      variables: {
        idAula,
        input: {
          links: data
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Os links da aula ${data?.updateAula?.aula?.title}  foram atualizados 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
        onCloseLinkToAula()
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar este link 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
        onCloseLinkToAula()
      })
  }

  const addVideoToAula = (
    { idAula }: Pick<AulaPayload, 'idAula'>,
    { data }: PayloadProps
  ) => {
    updateAula({
      variables: {
        idAula,
        input: {
          video: data
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Os vídeos da aula ${data?.updateAula?.aula?.title}  foram atualizados 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
        onCloseVideoToAula()
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar este vídeo 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
        onCloseVideoToAula()
      })
  }

  const addAudioToAula = (
    { idAula }: Pick<AulaPayload, 'idAula'>,
    { data }: PayloadProps
  ) => {
    updateAula({
      variables: {
        idAula,
        input: {
          audio: data
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Os áudios da aula ${data?.updateAula?.aula?.title}  foram atualizados 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
        onCloseAudioToAula()
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar este vídeo 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
        onCloseAudioToAula()
      })
  }

  return (
    <AulaContext.Provider
      value={{
        isOpen,
        onClose,
        onOpen,
        addAula,
        removeAula,
        addLinkToAula,
        addVideoToAula,
        addAudioToAula,
        isOpenLinkToAula,
        onOpenLinkToAula,
        onCloseLinkToAula,
        isOpenRemoveLinkToAula,
        onOpenRemoveLinkToAula,
        onCloseRemoveLinkToAula,
        isOpenVideoToAula,
        onOpenVideoToAula,
        onCloseVideoToAula,
        isOpenRemoveVideoToAula,
        onOpenRemoveVideoToAula,
        onCloseRemoveVideoToAula,
        isOpenAudioToAula,
        onOpenAudioToAula,
        onCloseAudioToAula,
        isOpenRemoveAudioToAula,
        onOpenRemoveAudioToAula,
        onCloseRemoveAudioToAula
      }}
    >
      {children}
    </AulaContext.Provider>
  )
}

const useAula = () => useContext(AulaContext)
export { AulaProvider, useAula }
