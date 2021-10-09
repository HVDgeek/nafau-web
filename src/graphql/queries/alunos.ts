import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'
import {
  QueryAlunos,
  QueryAlunosVariables
} from 'graphql/generated/QueryAlunos'

export const QUERY_ALUNOS = gql`
  query QueryAlunos($limit: Int!, $start: Int) {
    alunos(limit: $limit, sort: "created_at:desc", start: $start) {
      ...AlunoFragment
      user {
        ...UserFragment
        institution {
          ...InstitutionFragment
        }
      }
    }
    alunosConnection {
      values {
        id
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

export function useQueryAlunos(
  options?: QueryHookOptions<QueryAlunos, QueryAlunosVariables>
) {
  return useQuery<QueryAlunos, QueryAlunosVariables>(QUERY_ALUNOS, options)
}
