import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { ProfessorFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'

export const QUERY_PROFESSORES = gql`
  query QueryProfessores($limit: Int!) {
    professores(limit: $limit) {
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
