import Course, { CourseTemplateProps } from 'templates/Course'
import sidebarManagerMock from 'components/Sidebar/managerMock'
import { initializeApollo } from 'utils/apollo'
import {
  QueryTurmas,
  QueryTurmasVariables
} from 'graphql/generated/QueryTurmas'
import { QUERY_TURMAS } from 'graphql/queries/turmas'

export default function Courses(props: CourseTemplateProps) {
  return (
    <Course
      {...props}
      withRegister
      title="Turmas"
      route="course"
      links={sidebarManagerMock}
      titleSemTurma="Nenhuma turma cadastrada!"
      descriptionSemTurma="Você precisa cadastrar novas turma para que apareça aqui. Abraços 😃"
    />
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryTurmas, QueryTurmasVariables>({
    query: QUERY_TURMAS,
    variables: { limit: 10 }
  })

  return {
    revalidate: 60,
    props: {
      courses: data.turmas.map((turma) => ({
        id: turma.id,
        title: turma.title,
        code: turma.code,
        status: turma.status,
        // timing: 50,
        lastLesson: turma.aulas.length && {
          title: turma.aulas[turma.aulas.length].title
        },
        teacher: {
          name: turma.teachers[0].name,
          avatar: `http://localhost:1337${turma.teachers[0].user?.avatar?.src}`
        },
        countAlunos: turma.alunos.length
      }))
    }
  }
}
