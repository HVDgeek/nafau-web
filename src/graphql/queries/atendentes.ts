import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AtendenteFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'
import {
  QueryAtendentes,
  QueryAtendentesVariables
} from 'graphql/generated/QueryAtendentes'

export const QUERY_ATENDENTES = gql`
  query QueryAtendentes($limit: Int!, $start: Int, $institutionId: ID!) {
    atendentes(
      limit: $limit
      sort: "created_at:desc"
      start: $start
      where: { institution: { id: $institutionId } }
    ) {
      ...AtendenteFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
    atendentesConnection(where: { institution: { id: $institutionId } }) {
      values {
        id
      }
    }
  }
  ${AtendenteFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const QUERY_ATENDENTE_BY_ID = gql`
  query QueryAtendenteById($id: ID!) {
    atendente(id: $id) {
      ...AtendenteFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
  }
  ${AtendenteFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export function useQueryAtendentes(
  options?: QueryHookOptions<QueryAtendentes, QueryAtendentesVariables>
) {
  return useQuery<QueryAtendentes, QueryAtendentesVariables>(
    QUERY_ATENDENTES,
    options
  )
}
