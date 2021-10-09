import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment UserFragment on UsersPermissionsUser {
    id
    email
    username
    blocked
    avatar {
      alternativeText
      src: url
    }
  }
`
