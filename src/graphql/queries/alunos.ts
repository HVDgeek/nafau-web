import { gql } from '@apollo/client'

export const QUERY_ALUNOS = gql`
  query QueryAlunos($limit: Int!) {
    alunos(limit: $limit) {
      id
      name
      user {
        username
        email
        blocked
        avatar {
          alternativeText
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
