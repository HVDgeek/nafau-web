import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import usersMock from 'components/UserCard/mock'

export default function StudentsPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      users: usersMock,
      title: 'Professores'
    }
  }
}
