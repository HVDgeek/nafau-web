import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { initializeApollo } from 'utils/apollo'
import { gql } from '@apollo/client'

export default function StudentsPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`
      query QueryAlunos {
        alunos {
          id
          name
          user {
            username
            email
            blocked
            avatar {
              alternativeText
              url
            }
            institution {
              id
              name
            }
          }
        }
      }
    `
  })

  return {
    props: {
      revalidate: 60,
      users: data.alunos.map((aluno) => ({
        name: aluno.name,
        email: aluno.user?.email,
        username: aluno.user?.username,
        avatar: `http://localhost:1337${aluno.user?.avatar?.url}` || null,
        isActive: !aluno.blocked
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
