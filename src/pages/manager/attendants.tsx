import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { initializeApollo } from 'utils/apollo'
import {
  QueryAtendentes,
  QueryAtendentesVariables
} from 'graphql/generated/QueryAtendentes'
import { QUERY_ATENDENTES } from 'graphql/queries/atendentes'

export default function StudentsPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} route="attendant" />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryAtendentes,
    QueryAtendentesVariables
  >({
    query: QUERY_ATENDENTES,
    variables: { limit: 9 }
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
