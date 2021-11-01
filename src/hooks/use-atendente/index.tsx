import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_USER,
  MUTATION_DELETE_USER,
  MUTATION_UPDATE_USER
} from 'graphql/mutations/user'
import {
  MutationCreateUser,
  MutationCreateUserVariables
} from 'graphql/generated/MutationCreateUser'
import {
  MutationCreateAtendente,
  MutationCreateAtendenteVariables
} from 'graphql/generated/MutationCreateAtendente'
import {
  MUTATION_CREATE_ATENDENTE,
  MUTATION_DELETE_ATENDENTE,
  MUTATION_UPDATE_ATENDENTE
} from 'graphql/mutations/atendente'
import { ENUM_ATENDENTES_SEXO } from 'graphql/generated/globalTypes'
import { useToast } from '@chakra-ui/toast'
import {
  MutationDeleteUser,
  MutationDeleteUserVariables
} from 'graphql/generated/MutationDeleteUser'
import {
  MutationUpdateAtendente,
  MutationUpdateAtendenteVariables
} from 'graphql/generated/MutationUpdateAtendente'
import {
  MutationUpdateUser,
  MutationUpdateUserVariables
} from 'graphql/generated/MutationUpdateUser'
import {
  MutationDeleteAtendente,
  MutationDeleteAtendenteVariables
} from 'graphql/generated/MutationDeleteAtendente'
import { QUERY_ATENDENTES } from 'graphql/queries/atendentes'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { Base64 } from 'js-base64'

export type AtendentePayload = {
  // User
  email: string
  username: string
  blocked: boolean
  password: string
  institution: string
  // Atendente
  birthday: string
  name: string
  numero_do_BI: string
  sexo: ENUM_ATENDENTES_SEXO | null
  telefone: string
}

export type AtendenteContextData = {
  addAtendente: (data: AtendentePayload) => void
  updateAtendente: (id: string, data: AtendentePayload) => void
  removeAtendente: (id: string) => void
  loading: boolean
}

export const AtendenteContextDefaultValues = {
  addAtendente: () => null,
  updateAtendente: () => null,
  removeAtendente: () => null,
  loading: false
}

export type AtendenteProviderProps = {
  children: React.ReactNode
}

export const AtendenteContext = createContext<AtendenteContextData>(
  AtendenteContextDefaultValues
)

const AtendenteProvider = ({ children }: AtendenteProviderProps) => {
  const [session] = useSession()
  const toast = useToast()
  const { push } = useRouter()

  const [createUser, { loading: loadingCreateUser }] = useMutation<
    MutationCreateUser,
    MutationCreateUserVariables
  >(MUTATION_CREATE_USER, {
    context: { session }
  })

  const [createAtendete, { loading: loadingCreateAtendete }] = useMutation<
    MutationCreateAtendente,
    MutationCreateAtendenteVariables
  >(MUTATION_CREATE_ATENDENTE, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_ATENDENTES,
        context: { session },
        variables: {
          limit: 9,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [deleteUser, { loading: loadingDeleteUser }] = useMutation<
    MutationDeleteUser,
    MutationDeleteUserVariables
  >(MUTATION_DELETE_USER, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_ATENDENTES,
        context: { session },
        variables: {
          limit: 9,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [deleteAtendente, { loading: loadingDeleteAtendente }] = useMutation<
    MutationDeleteAtendente,
    MutationDeleteAtendenteVariables
  >(MUTATION_DELETE_ATENDENTE, {
    context: { session }
  })

  const [atualizaAtendente, { loading: loadingUpdateAtendente }] = useMutation<
    MutationUpdateAtendente,
    MutationUpdateAtendenteVariables
  >(MUTATION_UPDATE_ATENDENTE, {
    context: { session }
  })

  const [updateUser, { loading: loadingUpdateUser }] = useMutation<
    MutationUpdateUser,
    MutationUpdateUserVariables
  >(MUTATION_UPDATE_USER, {
    context: { session }
  })

  const addAtendente = (payload: AtendentePayload) => {
    createUser({
      variables: {
        input: {
          data: {
            email: payload.email,
            username: payload.username,
            blocked: payload.blocked,
            confirmed: true,
            password: payload.password,
            institution: payload.institution
          }
        }
      }
    })
      .then(({ data }) => {
        createAtendete({
          variables: {
            input: {
              data: {
                birthday: payload.birthday,
                institution: payload.institution,
                name: payload.name,
                numero_do_BI: payload.numero_do_BI,
                sexo: payload.sexo,
                telefone: payload.telefone,
                user: data?.createUser?.user?.id
              }
            }
          }
        })
          .then((res) => {
            toast({
              title: `${res.data?.createAtendente?.atendente?.name} foi cadastrado 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
            push(
              `/manager/attendant/${Base64.encode(
                res.data!.createAtendente!.atendente!.id
              )}`
            )
            return
          })
          .catch((error) => {
            //Delete user
            deleteUser({
              variables: {
                input: { where: { id: data!.createUser!.user!.id } }
              }
            })
            toast({
              title: `Não foi possível cadastrar este atendente 😢`,
              // variant: 'left-accent',
              position: 'top-right',
              description: 'Verifique os dados e tente novamente',
              status: 'error',
              isClosable: true
            })
          })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível cadastrar este atendente 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const updateAtendente = (idAtendente: string, payload: AtendentePayload) => {
    atualizaAtendente({
      variables: {
        input: {
          where: { id: idAtendente },
          data: {
            birthday: payload.birthday,
            name: payload.name,
            numero_do_BI: payload.numero_do_BI,
            sexo: payload.sexo,
            telefone: payload.telefone
          }
        }
      }
    })
      .then(({ data }) => {
        updateUser({
          variables: {
            input: {
              where: { id: data!.updateAtendente!.atendente!.user!.id },
              data: {
                email: payload.email,
                username: payload.username,
                blocked: payload.blocked
              }
            }
          }
        })
          .then((res) => {
            toast({
              title: `${data?.updateAtendente?.atendente?.name} foi atualizado 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
          })
          .catch((error) => {
            toast({
              title: `Não foi possível Atualizar os dados deste atendente 😢`,
              // variant: 'left-accent',
              position: 'top-right',
              description: 'Verifique os dados e tente novamente',
              status: 'error',
              isClosable: true
            })
          })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível Atualizar os dados deste atendente 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const removeAtendente = (idAtendente: string) => {
    deleteAtendente({
      variables: { input: { where: { id: idAtendente } } }
    })
      .then(({ data }) => {
        deleteUser({
          variables: {
            input: {
              where: { id: data!.deleteAtendente!.atendente!.user!.id }
            }
          }
        })
          .then((res) => {
            toast({
              title: `${data?.deleteAtendente?.atendente?.name} foi removido 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
            return
          })
          .catch((error) => {
            toast({
              title: `Não foi possível remover este atendente 😢`,
              // variant: 'left-accent',
              position: 'top-right',
              description: 'Verifique os dados e tente novamente',
              status: 'error',
              isClosable: true
            })
          })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível remover este atendente 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  return (
    <AtendenteContext.Provider
      value={{
        addAtendente,
        updateAtendente,
        removeAtendente,
        loading: false
      }}
    >
      {children}
    </AtendenteContext.Provider>
  )
}

const useAtendente = () => useContext(AtendenteContext)

export { AtendenteProvider, useAtendente }
