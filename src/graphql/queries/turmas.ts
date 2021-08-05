import { gql } from '@apollo/client'

export const QUERY_TURMAS = gql`
  query QueryTurmas($limit: Int!) {
    turmas(limit: $limit) {
      id
      title
      description
      code
      status
      institution {
        id
        name
      }
      alunos {
        id
        name
      }
      teachers {
        id
        name
        user {
          avatar {
            url
          }
        }
      }
      aulas {
        id
        title
      }
    }
  }
`
