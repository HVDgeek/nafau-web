import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { initializeApollo } from 'utils/apollo'
import {
  QueryProfessores,
  QueryProfessoresVariables
} from 'graphql/generated/QueryProfessores'
import { QUERY_PROFESSORES } from 'graphql/queries/professores'

export default function StudentsPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} route="teacher" />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryProfessores,
    QueryProfessoresVariables
  >({
    query: QUERY_PROFESSORES,
    variables: { limit: 9 }
  })

  return {
    revalidate: 60,
    props: {
      users: data.professores.map((prof) => ({
        id: prof.id,
        name: prof.name,
        email: prof.user?.email,
        username: prof.user?.username,
        avatar: `http://localhost:1337${prof.user?.avatar?.src}`,
        isActive: !prof.user?.blocked
      })),
      title: 'Professores'
    }
  }
}
