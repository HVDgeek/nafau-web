import { initializeApollo } from 'utils/apollo'
import {
  QueryAlunos,
  QueryAlunosVariables
} from 'graphql/generated/QueryAlunos'
import { QUERY_ALUNOS, useQueryAlunos } from 'graphql/queries/alunos'
import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { UserCardProps } from 'components/UserCard'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function StudentsPage(props: UsersTemplateProps) {
  let hasMoreAlunos = false
  const { data, loading, fetchMore } = useQueryAlunos({
    // notifyOnNetworkStatusChange: true,
    variables: { limit: 9 }
  })

  if (data) {
    hasMoreAlunos =
      data?.alunos.length < (data?.alunosConnection?.values?.length || 0)
  }

  const users = data?.alunos.map((aluno) => ({
    id: aluno.id,
    name: aluno.name,
    email: aluno.user?.email,
    username: aluno.user?.username,
    avatar: `http://localhost:1337${aluno.user?.avatar?.src}`,
    isActive: !aluno.user?.blocked
  })) as UserCardProps[]

  const [session, loadingSession] = useSession()
  const { asPath } = useRouter()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 9, start: data?.alunos.length }
    })
  }

  return (
    <UsersTemplate
      {...props}
      loading={loading}
      users={users}
      route="student"
      title="Estudantes"
      hasMore={hasMoreAlunos}
      onSubmit={() => {
        console.log('ADD ALUNO')
      }}
      handleShowMore={handleShowMore}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  await apolloClient.query<QueryAlunos, QueryAlunosVariables>({
    query: QUERY_ALUNOS,
    variables: { limit: 9 },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      title: 'Estudantes'
    }
  }
}
