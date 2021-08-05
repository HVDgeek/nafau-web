import { gql } from '@apollo/client'

export const QUERY_PROFESSORES = gql`
  query QueryProfessores($limit: Int!) {
    professores(limit: $limit) {
      id
      name
      user {
        username
        email
        blocked
        avatar {
          url
        }
        institution {
          id
          name
        }
      }
    }
  }
`
