import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { initializeApollo } from 'utils/apollo'
import {
  QueryAtendentes,
  QueryAtendentesVariables
} from 'graphql/generated/QueryAtendentes'
import { QUERY_ATENDENTES } from 'graphql/queries/atendentes'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function StudentsPage(props: UsersTemplateProps) {
  const [session, loadingSession] = useSession()
  const { asPath } = useRouter()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }
  return <UsersTemplate {...props} route="attendant" />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryAtendentes,
    QueryAtendentesVariables
  >({
    query: QUERY_ATENDENTES,
    variables: { limit: 9 },
    fetchPolicy: 'no-cache'
  })
  return {
    revalidate: 60,
    props: {
      users: data.atendentes.map((atendente) => ({
        id: atendente.id,
        name: atendente.name,
        email: atendente.user?.email,
        username: atendente.user?.username,
        avatar: `http://localhost:1337${atendente.user?.avatar?.src}`,
        isActive: !atendente.user?.blocked
      })),
      title: 'Atendentes'
    }
  }
}
