import { gql, useQuery } from '@apollo/client'
import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import usersMock from 'components/UserCard/mock'

export default function StudentsPage(props: UsersTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getAllAlunos {
      alunos {
        id
        name
      }
    }
  `)

  if (loading) return <p>Carregando....</p>

  if (error) return <p>{error}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <UsersTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      users: usersMock,
      title: 'Estudantes'
    }
  }
}
