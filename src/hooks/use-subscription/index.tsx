import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/toast'
import {
  MutationUpdateAluno,
  MutationUpdateAlunoVariables
} from 'graphql/generated/MutationUpdateAluno'
import {
  MutationUpdateProfessor,
  MutationUpdateProfessorVariables
} from 'graphql/generated/MutationUpdateProfessor'
import {
  MutationUpdateTurma,
  MutationUpdateTurmaVariables
} from 'graphql/generated/MutationUpdateTurma'
import { MUTATION_UPDATE_ALUNO } from 'graphql/mutations/aluno'
import { MUTATION_UPDATE_PROFESSOR } from 'graphql/mutations/professor'
import { MUTATION_UPDATE_TURMA } from 'graphql/mutations/turma'
import { QUERY_ALUNOS, QUERY_ALUNO_BY_ID } from 'graphql/queries/alunos'
import {
  QUERY_PROFESSORES,
  QUERY_PROFESSOR_BY_ID
} from 'graphql/queries/professores'
import { QUERY_TURMAS, QUERY_TURMA_BY_ID } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import React, { createContext, useContext, useReducer } from 'react'
import { User, UserState } from './users-reducer'
import { usersReducer, initialState } from './users-reducer'

export type PayloadProps = {
  ids: string[]
}

export type SubscriptionContextData = {
  // Select users/classes(courses)
  addUser: (item: User) => void
  deleteUser: (item: User) => void
  deleteAllUsers: () => void
  state: UserState
  // subscription students and course on database
  addCourseToStudent: (id: string, data: PayloadProps) => void
  addCourseToTeacher: (id: string, data: PayloadProps) => void
  addStudentToCourse: (id: string, data: PayloadProps) => void
  addTeacherToCourse: (id: string, data: PayloadProps) => void
}

export const SubscriptionContextDefaultValues = {
  addUser: () => null,
  deleteUser: () => null,
  deleteAllUsers: () => null,
  addCourseToStudent: () => null,
  addCourseToTeacher: () => null,
  addStudentToCourse: () => null,
  addTeacherToCourse: () => null,
  state: {
    selectUsers: []
  }
}

export type SubscriptionProviderProps = {
  children: React.ReactNode
}

export const SubscriptionContext = createContext<SubscriptionContextData>(
  SubscriptionContextDefaultValues
)

const SubscriptionProvider = ({ children }: SubscriptionProviderProps) => {
  const [state, dispatch] = useReducer(usersReducer, initialState)
  const [session] = useSession()
  const toast = useToast()
  const { query } = useRouter()

  const [updateAluno, { loading: loadingUpdateAluno }] = useMutation<
    MutationUpdateAluno,
    MutationUpdateAlunoVariables
  >(MUTATION_UPDATE_ALUNO, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_ALUNO_BY_ID,
        context: { session },
        variables: {
          id: query?.id ? Base64.decode(query?.id as string) : ''
        }
      },
      {
        query: QUERY_TURMAS,
        context: { session },
        variables: {
          limit: 200,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [updateTeacher, { loading: loadingUpdateTeacher }] = useMutation<
    MutationUpdateProfessor,
    MutationUpdateProfessorVariables
  >(MUTATION_UPDATE_PROFESSOR, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_PROFESSOR_BY_ID,
        context: { session },
        variables: {
          id: query?.id ? Base64.decode(query?.id as string) : ''
        }
      },
      {
        query: QUERY_TURMAS,
        context: { session },
        variables: {
          limit: 200,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [updateCourse, { loading: loadingUpdateCourse }] = useMutation<
    MutationUpdateTurma,
    MutationUpdateTurmaVariables
  >(MUTATION_UPDATE_TURMA, {
    context: { session },
    refetchQueries: [
      {
        query: QUERY_TURMA_BY_ID,
        context: { session },
        variables: {
          id: query?.id ? Base64.decode(query?.id as string) : ''
        }
      },
      {
        query: QUERY_ALUNOS,
        context: { session },
        variables: {
          limit: 200,
          institutionId: (session as SessionProps)?.user?.institution
        }
      }
    ]
  })

  const [updateCourseTeacher, { loading: loadingUpdateCourseTeacher }] =
    useMutation<MutationUpdateTurma, MutationUpdateTurmaVariables>(
      MUTATION_UPDATE_TURMA,
      {
        context: { session },
        refetchQueries: [
          {
            query: QUERY_TURMA_BY_ID,
            context: { session },
            variables: {
              id: query?.id ? Base64.decode(query?.id as string) : ''
            }
          },
          {
            query: QUERY_PROFESSORES,
            context: { session },
            variables: {
              limit: 200,
              institutionId: (session as SessionProps)?.user?.institution
            }
          }
        ]
      }
    )

  const addUser = ({ id }: User) => {
    dispatch({
      type: 'AddUser',
      payload: { id }
    })
  }
  const deleteUser = ({ id }: User) => {
    dispatch({
      type: 'DeleteUser',
      payload: { id }
    })
  }
  const deleteAllUsers = () => {
    dispatch({
      type: 'DeleteAllUsers'
    })
  }

  const addCourseToStudent = (idStudent: string, { ids }: PayloadProps) => {
    updateAluno({
      variables: {
        input: {
          where: { id: idStudent },
          data: {
            turmas: ids
          }
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Turmas alteradas para ${data?.updateAluno?.aluno?.name} 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar turmas para este aluno 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  const addCourseToTeacher = (idTeacher: string, { ids }: PayloadProps) => {
    updateTeacher({
      variables: {
        input: {
          where: { id: idTeacher },
          data: {
            turmas: ids
          }
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Turmas alteradas para ${data?.updateProfessore?.professore?.name} 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar turmas para este professor 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  const addStudentToCourse = (idCourse: string, { ids }: PayloadProps) => {
    updateCourse({
      variables: {
        input: {
          where: { id: idCourse },
          data: {
            alunos: ids
          }
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Alunos adicionados para ${data?.updateTurma?.turma?.title} 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar alunos para esta turma 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  const addTeacherToCourse = (idCourse: string, { ids }: PayloadProps) => {
    updateCourseTeacher({
      variables: {
        input: {
          where: { id: idCourse },
          data: {
            teachers: ids
          }
        }
      }
    })
      .then(({ data }) => {
        toast({
          title: `Professores adicionados para ${data?.updateTurma?.turma?.title} 😃`,
          // variant: 'left-accent',
          position: 'top-right',
          // description: 'Verifique as suas credenciais e tente novamente',
          status: 'success',
          isClosable: true
        })
      })
      .catch((error) => {
        toast({
          title: `Não foi possível adicionar professores para esta turma 😢`,
          // variant: 'left-accent',
          position: 'top-right',
          description: 'Verifique os dados e tente novamente',
          status: 'error',
          isClosable: true
        })
      })
  }

  return (
    <SubscriptionContext.Provider
      value={{
        state,
        addUser,
        deleteUser,
        deleteAllUsers,
        addCourseToStudent,
        addCourseToTeacher,
        addStudentToCourse,
        addTeacherToCourse
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

const useSubscription = () => useContext(SubscriptionContext)

export { useSubscription, SubscriptionProvider }
