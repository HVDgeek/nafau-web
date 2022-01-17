import { gql } from '@apollo/client'

export const MUTATION_CREATE_AULA = gql`
  mutation MutationCreateAula(
    $title: String!
    $description: String
    $idTurma: ID!
  ) {
    createAula(
      input: {
        data: { title: $title, description: $description, turma: $idTurma }
      }
    ) {
      aula {
        id
        title
      }
    }
  }
`

export const MUTATION_DELETE_AULA = gql`
  mutation MutationDeleteAula($idAula: ID!) {
    deleteAula(input: { where: { id: $idAula } }) {
      aula {
        id
        title
      }
    }
  }
`
