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
  MutationCreateAluno,
  MutationCreateAlunoVariables
} from 'graphql/generated/MutationCreateAluno'
import {
  MUTATION_CREATE_ALUNO,
  MUTATION_DELETE_ALUNO,
  MUTATION_UPDATE_ALUNO
} from 'graphql/mutations/aluno'
import { ENUM_ALUNOS_SEXO } from 'graphql/generated/globalTypes'
import { useToast } from '@chakra-ui/toast'
import {
  MutationDeleteUser,
  MutationDeleteUserVariables
} from 'graphql/generated/MutationDeleteUser'
import {
  MutationUpdateAluno,
  MutationUpdateAlunoVariables
} from 'graphql/generated/MutationUpdateAluno'
import {
  MutationUpdateUser,
  MutationUpdateUserVariables
} from 'graphql/generated/MutationUpdateUser'
import {
  MutationDeleteAluno,
  MutationDeleteAlunoVariables
} from 'graphql/generated/MutationDeleteAluno'
import { QUERY_ALUNOS } from 'graphql/queries/alunos'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { Base64 } from 'js-base64'

export type StudentPayload = {
  // User
  email: string
  username: string
  blocked: boolean
  password: string
  institution: string
  // Student
  birthday: string
  name: string
  numero_do_BI: string
  numeroDeMatricula: string
  sexo: ENUM_ALUNOS_SEXO | null
  telefone: string
}

export type StudentContextData = {
  addStudent: (data: StudentPayload) => void
  updateStudent: (id: string, data: StudentPayload) => void
  removeStudent: (id: string) => void
  loading: boolean
}

export const StudentContextDefaultValues = {
  addStudent: () => null,
  updateStudent: () => null,
  removeStudent: () => null,
  loading: false
}

export type StudentProviderProps = {
  children: React.ReactNode
}

export const StudentContext = createContext<StudentContextData>(
  StudentContextDefaultValues
)

const StudentProvider = ({ children }: StudentProviderProps) => {
  const [session] = useSession()
  const toast = useToast()
  const { push } = useRouter()

  const [createUser, { loading: loadingCreateUser }] = useMutation<
    MutationCreateUser,
    MutationCreateUserVariables
  >(MUTATION_CREATE_USER, {
    context: { session }
  })

  const [createAluno, { loading: loadingCreateAluno }] = useMutation<
    MutationCreateAluno,
    MutationCreateAlunoVariables
  >(MUTATION_CREATE_ALUNO, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_ALUNOS,
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
        query: QUERY_ALUNOS,
        context: { session },
        variables: {
          limit: 9,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [deleteAluno, { loading: loadingDeleteAluno }] = useMutation<
    MutationDeleteAluno,
    MutationDeleteAlunoVariables
  >(MUTATION_DELETE_ALUNO, {
    context: { session }
  })

  const [updateAluno, { loading: loadingUpdateAluno }] = useMutation<
    MutationUpdateAluno,
    MutationUpdateAlunoVariables
  >(MUTATION_UPDATE_ALUNO, {
    context: { session }
  })

  const [updateUser, { loading: loadingUpdateUser }] = useMutation<
    MutationUpdateUser,
    MutationUpdateUserVariables
  >(MUTATION_UPDATE_USER, {
    context: { session }
  })

  const addStudent = (payload: StudentPayload) => {
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
        createAluno({
          variables: {
            input: {
              data: {
                birthday: payload.birthday,
                institution: payload.institution,
                name: payload.name,
                numero_do_BI: payload.numero_do_BI,
                numeroDeMatricula: payload.numeroDeMatricula,
                sexo: payload.sexo,
                telefone: payload.telefone,
                user: data?.createUser?.user?.id
              }
            }
          }
        })
          .then((res) => {
            toast({
              title: `${res.data?.createAluno?.aluno?.name} foi cadastrado 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
            push(
              `/manager/student/${Base64.encode(
                res.data!.createAluno!.aluno!.id
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
              title: `Não foi possível cadastrar este aluno 😢`,
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
          title: `Não foi possível cadastrar este aluno 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const updateStudent = (idStudent: string, payload: StudentPayload) => {
    updateAluno({
      variables: {
        input: {
          where: { id: idStudent },
          data: {
            birthday: payload.birthday,
            name: payload.name,
            numero_do_BI: payload.numero_do_BI,
            numeroDeMatricula: payload.numeroDeMatricula,
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
              where: { id: data!.updateAluno!.aluno!.user!.id },
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
              title: `${data?.updateAluno?.aluno?.name} foi atualizado 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
          })
          .catch((error) => {
            toast({
              title: `Não foi possível Atualizar os dados deste aluno 😢`,
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
          title: `Não foi possível Atualizar os dados deste aluno 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const removeStudent = (idStudent: string) => {
    deleteAluno({
      variables: { input: { where: { id: idStudent } } }
    })
      .then(({ data }) => {
        deleteUser({
          variables: {
            input: { where: { id: data!.deleteAluno!.aluno!.user!.id } }
          }
        })
          .then((res) => {
            toast({
              title: `${data?.deleteAluno?.aluno?.name} foi removido 😃`,
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
              title: `Não foi possível remover este aluno 😢`,
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
          title: `Não foi possível remover este aluno 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  return (
    <StudentContext.Provider
      value={{
        addStudent,
        updateStudent,
        removeStudent,
        loading: false
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

const useStudent = () => useContext(StudentContext)

export { StudentProvider, useStudent }
