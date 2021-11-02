import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment, ProfessorFragment } from 'graphql/fragments/person'
import { TurmaFragment } from 'graphql/fragments/turma'
import { UserFragment } from 'graphql/fragments/user'
import {
  QueryAlunoById,
  QueryAlunoByIdVariables
} from 'graphql/generated/QueryAlunoById'
import {
  QueryAlunos,
  QueryAlunosVariables
} from 'graphql/generated/QueryAlunos'

export const QUERY_ALUNOS = gql`
  query QueryAlunos($limit: Int!, $start: Int, $institutionId: ID!) {
    alunos(
      limit: $limit
      sort: "created_at:desc"
      start: $start
      where: { institution: { id: $institutionId } }
    ) {
      ...AlunoFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
    alunosConnection(where: { institution: { id: $institutionId } }) {
      values {
        id
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const QUERY_ALUNO_BY_ID = gql`
  query QueryAlunoById($id: ID!) {
    aluno(id: $id) {
      ...AlunoFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
      turmas {
        ...TurmaFragment
        alunos {
          ...AlunoFragment
          user {
            ...UserFragment
          }
        }
        teachers {
          ...ProfessorFragment
          user {
            ...UserFragment
          }
        }
        aulas {
          id
          title
        }
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
  ${TurmaFragment}
  ${ProfessorFragment}
`

export function useQueryAlunos(
  options?: QueryHookOptions<QueryAlunos, QueryAlunosVariables>
) {
  return useQuery<QueryAlunos, QueryAlunosVariables>(QUERY_ALUNOS, options)
}

export function useQueryAlunoById(
  options?: QueryHookOptions<QueryAlunoById, QueryAlunoByIdVariables>
) {
  return useQuery<QueryAlunoById, QueryAlunoByIdVariables>(
    QUERY_ALUNO_BY_ID,
    options
  )
}
