import UsersTemplate, { UsersTemplateProps } from 'templates/Users'

export default function StudentsPage(props: UsersTemplateProps) {
  return <UsersTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      users: []
    }
  }
}
