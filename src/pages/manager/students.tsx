import { useQuery } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'
import {
  QueryAlunos,
  QueryAlunosVariables
} from 'graphql/generated/QueryAlunos'
import { QUERY_ALUNOS } from 'graphql/queries/alunos'
import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { UserCardProps } from 'components/UserCard'

export default function StudentsPage(props: UsersTemplateProps) {
  const { data, loading } = useQuery<QueryAlunos, QueryAlunosVariables>(
    QUERY_ALUNOS,
    {
      variables: { limit: 9 }
    }
  )

  const users = data?.alunos.map((aluno) => ({
    id: aluno.id,
    name: aluno.name,
    email: aluno.user?.email,
    username: aluno.user?.username,
    avatar: `http://localhost:1337${aluno.user?.avatar?.src}`,
    isActive: !aluno.user?.blocked
  })) as UserCardProps[]

  return (
    <UsersTemplate
      // {...props}
      loading={loading}
      users={users}
      route="student"
      title="Estudantes"
      onSubmit={() => {
        console.log('ADD ALUNO')
      }}
    />
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryAlunos, QueryAlunosVariables>({
    query: QUERY_ALUNOS,
    variables: { limit: 9 }
  })

  return {
    revalidate: 60,
    props: {
      users: data.alunos.map((aluno) => ({
        id: aluno.id,
        name: aluno.name,
        email: aluno.user?.email,
        username: aluno.user?.username,
        avatar: `http://localhost:1337${aluno.user?.avatar?.src}`,
        isActive: !aluno.user?.blocked
      })),
      title: 'Estudantes'
    }
  }
}
