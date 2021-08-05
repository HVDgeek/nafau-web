import { initializeApollo } from 'utils/apollo'
import {
  QueryAlunos,
  QueryAlunosVariables
} from 'graphql/generated/QueryAlunos'
import { QUERY_ALUNOS } from 'graphql/queries/alunos'
import UsersTemplate, { UsersTemplateProps } from 'templates/Users'

export default function StudentsPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} route="student" />
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
        avatar: `http://localhost:1337${aluno.user?.avatar?.url}`,
        isActive: !aluno.user?.blocked
      })),
      title: 'Estudantes'
    }
  }
}

// {
//   name: 'Hiduíno Domingos',
//   email: 'hvduino@gmail.com',
//   username: '@hiduino',
//   avatar: 'https://avatars.githubusercontent.com/u/34204904?v=4',
//   isActive: true
// },
