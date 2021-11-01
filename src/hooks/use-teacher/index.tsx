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
  MutationCreateProfessor,
  MutationCreateProfessorVariables
} from 'graphql/generated/MutationCreateProfessor'
import {
  MUTATION_CREATE_PROFESSOR,
  MUTATION_DELETE_PROFESSOR,
  MUTATION_UPDATE_PROFESSOR
} from 'graphql/mutations/professor'
import { ENUM_PROFESSORES_SEXO } from 'graphql/generated/globalTypes'
import { useToast } from '@chakra-ui/toast'
import {
  MutationDeleteUser,
  MutationDeleteUserVariables
} from 'graphql/generated/MutationDeleteUser'
import {
  MutationUpdateProfessor,
  MutationUpdateProfessorVariables
} from 'graphql/generated/MutationUpdateProfessor'
import {
  MutationUpdateUser,
  MutationUpdateUserVariables
} from 'graphql/generated/MutationUpdateUser'
import {
  MutationDeleteProfessor,
  MutationDeleteProfessorVariables
} from 'graphql/generated/MutationDeleteProfessor'
import { QUERY_PROFESSORES } from 'graphql/queries/professores'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { Base64 } from 'js-base64'

export type TeacherPayload = {
  // User
  email: string
  username: string
  blocked: boolean
  password: string
  institution: string
  // Teacher
  birthday: string
  name: string
  numero_do_BI: string
  sexo: ENUM_PROFESSORES_SEXO | null
  telefone: string
}

export type TeacherContextData = {
  addTeacher: (data: TeacherPayload) => void
  updateTeacher: (id: string, data: TeacherPayload) => void
  removeTeacher: (id: string) => void
  loading: boolean
}

export const TeacherContextDefaultValues = {
  addTeacher: () => null,
  updateTeacher: () => null,
  removeTeacher: () => null,
  loading: false
}

export type TeacherProviderProps = {
  children: React.ReactNode
}

export const TeacherContext = createContext<TeacherContextData>(
  TeacherContextDefaultValues
)

const TeacherProvider = ({ children }: TeacherProviderProps) => {
  const [session] = useSession()
  const toast = useToast()
  const { push } = useRouter()

  const [createUser, { loading: loadingCreateUser }] = useMutation<
    MutationCreateUser,
    MutationCreateUserVariables
  >(MUTATION_CREATE_USER, {
    context: { session }
  })

  const [createProfessor, { loading: loadingCreateProfessor }] = useMutation<
    MutationCreateProfessor,
    MutationCreateProfessorVariables
  >(MUTATION_CREATE_PROFESSOR, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_PROFESSORES,
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
        query: QUERY_PROFESSORES,
        context: { session },
        variables: {
          limit: 9,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [deleteProfessor, { loading: loadingDeleteProfessor }] = useMutation<
    MutationDeleteProfessor,
    MutationDeleteProfessorVariables
  >(MUTATION_DELETE_PROFESSOR, {
    context: { session }
  })

  const [updateProfessor, { loading: loadingUpdateProfessor }] = useMutation<
    MutationUpdateProfessor,
    MutationUpdateProfessorVariables
  >(MUTATION_UPDATE_PROFESSOR, {
    context: { session }
  })

  const [updateUser, { loading: loadingUpdateUser }] = useMutation<
    MutationUpdateUser,
    MutationUpdateUserVariables
  >(MUTATION_UPDATE_USER, {
    context: { session }
  })

  const addTeacher = (payload: TeacherPayload) => {
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
        createProfessor({
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
              title: `${res.data?.createProfessore?.professore?.name} foi cadastrado 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
            push(
              `/manager/teacher/${Base64.encode(
                res.data!.createProfessore!.professore!.id
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
              title: `Não foi possível cadastrar este professor 😢`,
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
          title: `Não foi possível cadastrar este professor 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const updateTeacher = (idTeacher: string, payload: TeacherPayload) => {
    updateProfessor({
      variables: {
        input: {
          where: { id: idTeacher },
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
              where: { id: data!.updateProfessore!.professore!.user!.id },
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
              title: `${data?.updateProfessore?.professore?.name} foi atualizado 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
          })
          .catch((error) => {
            toast({
              title: `Não foi possível Atualizar os dados deste professor 😢`,
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
          title: `Não foi possível Atualizar os dados deste professor 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const removeTeacher = (idTeacher: string) => {
    deleteProfessor({
      variables: { input: { where: { id: idTeacher } } }
    })
      .then(({ data }) => {
        deleteUser({
          variables: {
            input: {
              where: { id: data!.deleteProfessore!.professore!.user!.id }
            }
          }
        })
          .then((res) => {
            toast({
              title: `${data?.deleteProfessore?.professore?.name} foi removido 😃`,
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
              title: `Não foi possível remover este professor 😢`,
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
          title: `Não foi possível remover este professor 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  return (
    <TeacherContext.Provider
      value={{
        addTeacher,
        updateTeacher,
        removeTeacher,
        loading: false
      }}
    >
      {children}
    </TeacherContext.Provider>
  )
}

const useTeacher = () => useContext(TeacherContext)

export { TeacherProvider, useTeacher }
