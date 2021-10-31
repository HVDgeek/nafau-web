import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { ProfessorFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'
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
    }
  }
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export function useQueryProfessores(
  options?: QueryHookOptions<QueryProfessores, QueryProfessoresVariables>
) {
  return useQuery<QueryProfessores, QueryProfessoresVariables>(
    QUERY_PROFESSORES,
    options
  )
}
