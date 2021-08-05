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

export const QUERY_ALUNO_BY_ID = gql`
  query QueryAlunoById($id: ID!) {
    aluno(id: $id) {
      id
      name
      sexo
      numero_do_BI
      numeroDeMatricula
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
