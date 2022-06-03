import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AtendenteFragment } from 'graphql/fragments/person'
import { UserFragment } from 'graphql/fragments/user'

export const MUTATION_CREATE_ATENDENTE = gql`
  mutation MutationCreateAtendente($input: createAtendenteInput!) {
    createAtendente(input: $input) {
      atendente {
        ...AtendenteFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${AtendenteFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const MUTATION_UPDATE_ATENDENTE = gql`
  mutation MutationUpdateAtendente($input: updateAtendenteInput!) {
    updateAtendente(input: $input) {
      atendente {
        ...AtendenteFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${AtendenteFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const MUTATION_DELETE_ATENDENTE = gql`
  mutation MutationDeleteAtendente($input: deleteAtendenteInput!) {
    deleteAtendente(input: $input) {
      atendente {
        ...AtendenteFragment
        user {
          ...UserFragment
          institution {
            ...InstitutionFragment
          }
        }
      }
    }
  }
  ${AtendenteFragment}
  ${UserFragment}
  ${InstitutionFragment}
`
