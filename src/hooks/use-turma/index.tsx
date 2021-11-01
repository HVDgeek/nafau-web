import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useMutation } from '@apollo/client'

import {
  MutationCreateTurma,
  MutationCreateTurmaVariables
} from 'graphql/generated/MutationCreateTurma'
import {
  MUTATION_CREATE_TURMA,
  MUTATION_DELETE_TURMA,
  MUTATION_UPDATE_TURMA
} from 'graphql/mutations/turma'
import { ENUM_TURMAS_STATUS } from 'graphql/generated/globalTypes'
import { useToast } from '@chakra-ui/toast'
import {
  MutationUpdateTurma,
  MutationUpdateTurmaVariables
} from 'graphql/generated/MutationUpdateTurma'
import {
  MutationDeleteTurma,
  MutationDeleteTurmaVariables
} from 'graphql/generated/MutationDeleteTurma'
import { QUERY_TURMAS } from 'graphql/queries/turmas'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { Base64 } from 'js-base64'

export type TurmaPayload = {
  title: string
  description: string
  code: string
  status: ENUM_TURMAS_STATUS | null
  institution: string
}

export type CourseContextData = {
  addCourse: (data: TurmaPayload) => void
  updateCourse: (id: string, data: TurmaPayload) => void
  removeCourse: (id: string) => void
  loading: boolean
}

export const CourseContextDefaultValues = {
  addCourse: () => null,
  updateCourse: () => null,
  removeCourse: () => null,
  loading: false
}

export type CourseProviderProps = {
  children: React.ReactNode
}

export const TeacherContext = createContext<CourseContextData>(
  CourseContextDefaultValues
)

const CourseProvider = ({ children }: CourseProviderProps) => {
  const [session] = useSession()
  const toast = useToast()
  const { push } = useRouter()

  const [createTurma, { loading: loadingCreateTurma }] = useMutation<
    MutationCreateTurma,
    MutationCreateTurmaVariables
  >(MUTATION_CREATE_TURMA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_TURMAS,
        context: { session },
        variables: {
          limit: 10,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [deleteTurma, { loading: loadingDeleteTurma }] = useMutation<
    MutationDeleteTurma,
    MutationDeleteTurmaVariables
  >(MUTATION_DELETE_TURMA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_TURMAS,
        context: { session },
        variables: {
          limit: 10,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [updateTurma, { loading: loadingUpdateTurma }] = useMutation<
    MutationUpdateTurma,
    MutationUpdateTurmaVariables
  >(MUTATION_UPDATE_TURMA, {
    context: { session }
  })

  const addCourse = (payload: TurmaPayload) => {
    createTurma({
      variables: {
        input: {
          data: {
            title: payload.title,
            description: payload.description,
            code: payload.code,
            status: payload.status,
            institution: payload.institution
          }
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `${data?.createTurma?.turma?.title} foi cadastrada 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
        push(`/manager/course/${Base64.encode(data!.createTurma!.turma!.id)}`)
        return
      })
      .catch((error) => {
        toast({
          title: `Não foi possível cadastrar esta turma 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const updateCourse = (idTurma: string, payload: TurmaPayload) => {
    updateTurma({
      variables: {
        input: {
          where: { id: idTurma },
          data: {
            title: payload.title,
            description: payload.description,
            code: payload.code,
            status: payload.status
          }
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `${data?.updateTurma?.turma?.title} foi atualizada 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível Atualizar os dados deste turma 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }
  const removeCourse = (idTurma: string) => {
    deleteTurma({
      variables: { input: { where: { id: idTurma } } }
    })
      .then(({ data }) => {
        toast({
          title: `${data?.deleteTurma?.turma?.title} foi removido 😃`,
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
          title: `Não foi possível remover esta turma 😢`,
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
        addCourse,
        updateCourse,
        removeCourse,
        loading: false
      }}
    >
      {children}
    </TeacherContext.Provider>
  )
}

const useCourse = () => useContext(TeacherContext)

export { CourseProvider, useCourse }
