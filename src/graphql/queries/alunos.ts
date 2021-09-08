import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'

export const QUERY_ALUNOS = gql`
  query QueryAlunos($limit: Int!) {
    alunos(limit: $limit, sort: "created_at:desc") {
      ...AlunoFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const QUERY_ALUNO_BY_ID = gql`
  query QueryAlunoById($id: ID!) {
    aluno(id: $id) {
      ...AlunoFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
`
