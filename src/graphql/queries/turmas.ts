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

export const QUERY_TURMA_BY_ID = gql`
  query QueryTurmaById($id: ID!) {
    turma(id: $id) {
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
