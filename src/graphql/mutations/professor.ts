import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { ProfessorFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'

export const MUTATION_CREATE_PROFESSOR = gql`
  mutation MutationCreateProfessor($input: createProfessoreInput!) {
    createProfessore(input: $input) {
      professore {
        ...ProfessorFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const MUTATION_UPDATE_PROFESSOR = gql`
  mutation MutationUpdateProfessor($input: updateProfessoreInput!) {
    updateProfessore(input: $input) {
      professore {
        ...ProfessorFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const MUTATION_DELETE_PROFESSOR = gql`
  mutation MutationDeleteProfessor($input: deleteProfessoreInput!) {
    deleteProfessore(input: $input) {
      professore {
        ...ProfessorFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`
