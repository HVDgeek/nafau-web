import { gql } from '@apollo/client'

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($id: ID!) {
    user(id: $id) {
      id
      email
      username
    }
  }
`
