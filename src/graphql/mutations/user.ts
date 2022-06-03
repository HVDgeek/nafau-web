import { gql } from '@apollo/client'
import { UserFragment } from 'graphql/fragments/user'

export const MUTATION_CREATE_USER = gql`
  mutation MutationCreateUser($input: createUserInput!) {
    createUser(input: $input) {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`

export const MUTATION_UPDATE_USER = gql`
  mutation MutationUpdateUser($input: updateUserInput!) {
    updateUser(input: $input) {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragment}
`

export const MUTATION_DELETE_USER = gql`
  mutation MutationDeleteUser($input: deleteUserInput!) {
    deleteUser(input: $input) {
      user {
        id
      }
    }
  }
`
