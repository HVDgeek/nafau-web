import { gql } from '@apollo/client'

export const TurmaFragment = gql`
  fragment TurmaFragment on Turmas {
    id
    title
    description
    code
    status
  }
`
