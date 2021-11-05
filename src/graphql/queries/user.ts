import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { InstitutionFragment } from 'graphql/fragments/institution'
import { AlunoFragment, ProfessorFragment } from 'graphql/fragments/person'
import { TurmaFragment } from 'graphql/fragments/turma'
import { UserFragment } from 'graphql/fragments/user'
import {
  QueryUserById,
  QueryUserByIdVariables
} from 'graphql/generated/QueryUserById'

export const QUERY_USER_BY_ID = gql`
  query QueryUserById($id: ID!) {
    user(id: $id) {
      id
      aluno {
        id
        name
        turmas {
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
      teacher {
        id
        name
        turmas {
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
      profile {
        canManageAluno {
          id
          isActive
          title
        }
        canManageAtendente {
          id
          isActive
          title
        }
        canManageAula {
          id
          isActive
          title
        }
        canManageGerente {
          id
          isActive
          title
        }
        canManageRoles {
          id
          isActive
          title
        }
        canManageTeacher {
          id
          isActive
          title
        }
        canManageTurma {
          id
          isActive
          title
        }
        canManageUsers {
          id
          isActive
          title
        }
        canSeeAulas {
          id
          isActive
          title
        }
        canSeeOtherUsers {
          id
          isActive
          title
        }
        canSeeTurmas {
          id
          isActive
          title
        }
        id
        name
      }
    }
  }
  ${TurmaFragment}
  ${AlunoFragment}
  ${ProfessorFragment}
  ${UserFragment}
  ${InstitutionFragment}
`

export function useQueryUserById(
  options?: QueryHookOptions<QueryUserById, QueryUserByIdVariables>
) {
  return useQuery<QueryUserById, QueryUserByIdVariables>(
    QUERY_USER_BY_ID,
    options
  )
}
