import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { AulaFragment } from 'graphql/fragments/aula'
import { QueryAulas, QueryAulasVariables } from 'graphql/generated/QueryAulas'

export const QUERY_AULAS = gql`
  query QueryAulas($limit: Int!, $start: Int, $idTurma: ID!) {
    aulas(
      limit: $limit
      sort: "created_at:asc"
      start: $start
      where: { turma: { id: $idTurma } }
    ) {
      ...AulaFragment
    }
    aulasConnection(where: { turma: { id: $idTurma } }) {
      values {
        id
      }
    }
  }
  ${AulaFragment}
`

export function useQueryAulas(
  options?: QueryHookOptions<QueryAulas, QueryAulasVariables>
) {
  return useQuery<QueryAulas, QueryAulasVariables>(QUERY_AULAS, options)
}
