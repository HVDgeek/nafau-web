import { gql } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment, ProfessorFragment } from 'graphql/fragments/person'
import { TurmaFragment } from 'graphql/fragments/turma'
import { UserFragment } from 'graphql/fragments/user'

export const QUERY_TURMAS = gql`
  query QueryTurmas($limit: Int!) {
    turmas(limit: $limit) {
      ...TurmaFragment
      institution {
        ...InstitutionFragment
      }
      alunos {
        ...AlunoFragment
      }
      teachers {
        ...ProfessorFragment
        user {
          ...UserFragment
        }
      }
      aulas {
        id
        title
      }
    }
  }
  ${TurmaFragment}
  ${AlunoFragment}
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export const QUERY_TURMA_BY_ID = gql`
  query QueryTurmaById($id: ID!) {
    turma(id: $id) {
      ...TurmaFragment
      institution {
        ...InstitutionFragment
      }
      alunos {
        ...AlunoFragment
      }
      teachers {
        ...ProfessorFragment
        user {
          ...UserFragment
        }
      }
      aulas {
        id
        title
      }
    }
  }
  ${TurmaFragment}
  ${AlunoFragment}
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`
