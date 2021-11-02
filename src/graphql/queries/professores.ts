import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment, ProfessorFragment } from 'graphql/fragments/person'
import { TurmaFragment } from 'graphql/fragments/turma'
import { UserFragment } from 'graphql/fragments/user'
import {
  QueryProfessorById,
  QueryProfessorByIdVariables
} from 'graphql/generated/QueryProfessorById'
import {
  QueryProfessores,
  QueryProfessoresVariables
} from 'graphql/generated/QueryProfessores'

export const QUERY_PROFESSORES = gql`
  query QueryProfessores($limit: Int!, $start: Int, $institutionId: ID!) {
    professores(
      limit: $limit
      sort: "created_at:desc"
      start: $start
      where: { institution: { id: $institutionId } }
    ) {
      ...ProfessorFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
    professoresConnection(where: { institution: { id: $institutionId } }) {
      values {
        id
      }
    }
  }
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const QUERY_PROFESSOR_BY_ID = gql`
  query QueryProfessorById($id: ID!) {
    professore(id: $id) {
      ...ProfessorFragment
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
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
  ${TurmaFragment}
  ${AlunoFragment}
`

export function useQueryProfessores(
  options?: QueryHookOptions<QueryProfessores, QueryProfessoresVariables>
) {
  return useQuery<QueryProfessores, QueryProfessoresVariables>(
    QUERY_PROFESSORES,
    options
  )
}

export function useQueryProfessorById(
  options?: QueryHookOptions<QueryProfessorById, QueryProfessorByIdVariables>
) {
  return useQuery<QueryProfessorById, QueryProfessorByIdVariables>(
    QUERY_PROFESSOR_BY_ID,
    options
  )
}
