import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment, ProfessorFragment } from 'graphql/fragments/person'
import { TurmaFragment } from 'graphql/fragments/turma'
import { UserFragment } from 'graphql/fragments/user'
import {
  QueryTurmas,
  QueryTurmasVariables
} from 'graphql/generated/QueryTurmas'

export const QUERY_TURMAS = gql`
  query QueryTurmas($limit: Int!, $start: Int, $institutionId: ID!) {
    turmas(
      limit: $limit
      sort: "created_at:desc"
      start: $start
      where: { institution: { id: $institutionId } }
    ) {
      ...TurmaFragment
      institution {
        ...InstitutionFragment
      }
      alunos {
        ...AlunoFragment
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
    turmasConnection(where: { institution: { id: $institutionId } }) {
      values {
        id
      }
    }
  }
  ${TurmaFragment}
  ${AlunoFragment}
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const QUERY_TURMA_BY_ID = gql`
  query QueryTurmaById($id: ID!) {
    turma(id: $id) {
      ...TurmaFragment
      institution {
        ...InstitutionFragment
      }
      alunos {
        ...AlunoFragment
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
  ${TurmaFragment}
  ${AlunoFragment}
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export function useQueryTurmas(
  options?: QueryHookOptions<QueryTurmas, QueryTurmasVariables>
) {
  return useQuery<QueryTurmas, QueryTurmasVariables>(QUERY_TURMAS, options)
}
