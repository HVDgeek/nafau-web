import React, { createContext, useContext, useState } from 'react'
import { useSession } from 'next-auth/client'
import { useMutation } from '@apollo/client'
import {
  MUTATION_CREATE_USER,
  MUTATION_DELETE_USER
} from 'graphql/mutations/user'
import {
  MutationCreateUser,
  MutationCreateUserVariables
} from 'graphql/generated/MutationCreateUser'
import {
  MutationCreateAluno,
  MutationCreateAlunoVariables
} from 'graphql/generated/MutationCreateAluno'
import { MUTATION_CREATE_ALUNO } from 'graphql/mutations/aluno'
import { ENUM_ALUNOS_SEXO } from 'graphql/generated/globalTypes'
import { useToast } from '@chakra-ui/toast'
import {
  MutationDeleteUser,
  MutationDeleteUserVariables
} from 'graphql/generated/MutationDeleteUser'

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
  updateStudent: () => void
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
    context: { session }
  })

  const [deleteUser, { loading: loadingDeleteUser }] = useMutation<
    MutationDeleteUser,
    MutationDeleteUserVariables
  >(MUTATION_DELETE_USER, {
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
  const updateStudent = () => {}
  const removeStudent = () => {}

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
