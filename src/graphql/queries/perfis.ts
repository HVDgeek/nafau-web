import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  QueryPerfis,
  QueryPerfisVariables
} from 'graphql/generated/QueryPerfis'

export const QUERY_PERFIS = gql`
  query QueryPerfis($limit: Int!) {
    perfis(limit: $limit) {
      id
      name
    }
  }
`

export function useQueryPerfis(
  options?: QueryHookOptions<QueryPerfis, QueryPerfisVariables>
) {
  return useQuery<QueryPerfis, QueryPerfisVariables>(QUERY_PERFIS, options)
}
