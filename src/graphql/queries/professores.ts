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

export const QUERY_PROFESSOR_BY_ID = gql`
  query QueryProfessorById($id: ID!) {
    professore(id: $id) {
      id
      name
      sexo
      numero_do_BI
      birthday
      telefone
      user {
        email
        username
        blocked
        avatar {
          src: url
        }
      }
    }
  }
`
