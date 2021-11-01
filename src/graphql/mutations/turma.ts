import { gql } from '@apollo/client'
import { TurmaFragment } from 'graphql/fragments/turma'

export const MUTATION_CREATE_TURMA = gql`
  mutation MutationCreateTurma($input: createTurmaInput!) {
    createTurma(input: $input) {
      turma {
        ...TurmaFragment
      }
    }
  }
  ${TurmaFragment}
`

export const MUTATION_UPDATE_TURMA = gql`
  mutation MutationUpdateTurma($input: updateTurmaInput!) {
    updateTurma(input: $input) {
      turma {
        ...TurmaFragment
      }
    }
  }
  ${TurmaFragment}
`

export const MUTATION_DELETE_TURMA = gql`
  mutation MutationDeleteTurma($input: deleteTurmaInput!) {
    deleteTurma(input: $input) {
      turma {
        ...TurmaFragment
      }
    }
  }
  ${TurmaFragment}
`
