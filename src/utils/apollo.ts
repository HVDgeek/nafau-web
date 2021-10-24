import { useMemo } from 'react'
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Session } from 'next-auth'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authLink = setContext(
    async (_, { headers, session: clientSession }) => {
      if (typeof window !== 'undefined') {
        const sess = JSON.parse(localStorage.getItem('@nafau-session') as any)

        if (sess) {
          const authorization = sess ? `Bearer ${sess?.jwt}` : ''
          return { headers: { ...headers, authorization } }
        }
      }

      const jwt = session?.jwt || clientSession?.jwt || ''
      const authorization = jwt ? `Bearer ${jwt}` : ''
      return { headers: { ...headers, authorization } }
    }
  )

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  // serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClientGlobal
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  )
  return store
}
