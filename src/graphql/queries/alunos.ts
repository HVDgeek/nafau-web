import { gql } from '@apollo/client'

export const QUERY_ALUNOS = gql`
  query QueryAlunos {
    alunos {
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
