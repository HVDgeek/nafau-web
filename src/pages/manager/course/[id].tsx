import {
  QueryTurmaById,
  QueryTurmaByIdVariables
} from 'graphql/generated/QueryTurmaById'
import {
  QueryTurmas,
  QueryTurmasVariables
} from 'graphql/generated/QueryTurmas'
import { QUERY_TURMAS, QUERY_TURMA_BY_ID } from 'graphql/queries/turmas'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import CourseRegisterTemplate, {
  CourseRegisterTemplateProps
} from 'templates/CourseRegister'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

export default function Index(props: CourseRegisterTemplateProps) {
  const router = useRouter()

  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <CourseRegisterTemplate {...props} />
}

// gerar em build time (/aluno/bla, /aluno/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryTurmas, QueryTurmasVariables>({
    query: QUERY_TURMAS,
    variables: { limit: 9 }
  })

  const paths = data.turmas.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryTurmaById,
    QueryTurmaByIdVariables
  >({
    query: QUERY_TURMA_BY_ID,
    variables: { id: `${params?.id}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.turma) {
    return { notFound: true }
  }

  const { turma } = data

  return {
    revalidate: 60,
    props: {
      id: turma.id,
      title: turma.title,
      code: turma.code,
      status: turma.status,
      alunos: turma.alunos.map((aluno) => ({
        id: aluno.id,
        name: aluno.name
      })),
      professores: turma.teachers.map((professor) => ({
        id: professor.id,
        name: professor.name
      })),
      aulas: turma.aulas.map((aula) => ({
        id: aula.id,
        title: aula.title
      }))
    }
  }
}
