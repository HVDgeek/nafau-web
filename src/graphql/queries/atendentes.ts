import { gql } from '@apollo/client'

export const QUERY_ATENDENTES = gql`
  query QueryAtendentes($limit: Int!) {
    atendentes(limit: $limit) {
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

export const QUERY_ATENDENTE_BY_ID = gql`
  query QueryAtendenteById($id: ID!) {
    atendente(id: $id) {
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
