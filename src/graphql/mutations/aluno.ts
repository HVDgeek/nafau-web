import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'

export const MUTATION_CREATE_ALUNO = gql`
  mutation MutationCreateAluno($input: createAlunoInput!) {
    createAluno(input: $input) {
      aluno {
        ...AlunoFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const MUTATION_UPDATE_ALUNO = gql`
  mutation MutationUpdateAluno($input: updateAlunoInput!) {
    updateAluno(input: $input) {
      aluno {
        ...AlunoFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const MUTATION_DELETE_ALUNO = gql`
  mutation MutationDeleteAluno($input: deleteAlunoInput!) {
    deleteAluno(input: $input) {
      aluno {
        ...AlunoFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${AlunoFragment}
  ${UserFragment}
  ${InstitutionFragment}
`
