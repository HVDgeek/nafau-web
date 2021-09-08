import { gql } from '@apollo/client'

export const InstitutionFragment = gql`
  fragment InstitutionFragment on Instituicoes {
    id
    name
  }
`
