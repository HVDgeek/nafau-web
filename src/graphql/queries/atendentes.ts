import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AtendenteFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'

export const QUERY_ATENDENTES = gql`
  query QueryAtendentes($limit: Int!) {
    atendentes(limit: $limit) {
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
