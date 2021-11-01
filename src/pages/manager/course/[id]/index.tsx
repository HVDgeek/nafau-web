import { FormikHelpers } from 'formik'
import {
  QueryTurmaById,
  QueryTurmaByIdVariables
} from 'graphql/generated/QueryTurmaById'
import { QUERY_TURMA_BY_ID } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import CourseRegisterTemplate, {
  CourseRegisterTemplateProps
} from 'templates/CourseRegister'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export type Values = Omit<
  CourseRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues'
>

export default function Index(props: CourseRegisterTemplateProps) {
  const router = useRouter()

  const [session, loadingSession] = useSession()

  const initialValues = {
    id: props.id,
    title: props.title,
    code: props.code,
    status: props.status,
    description: props.description
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  const onSubmit = async (
    values: Values,
    { setErrors, resetForm }: FormikHelpers<Values>
  ) => {
    console.log('VALUES', values)
  }

  return (
    <CourseRegisterTemplate
      {...props}
      onSubmit={onSubmit}
      initialValues={initialValues}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { params } = context

  const { data } = await apolloClient.query<
    QueryTurmaById,
    QueryTurmaByIdVariables
  >({
    query: QUERY_TURMA_BY_ID,
    variables: { id: `${Base64.decode(`${params?.id}`)}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.turma) {
    return { notFound: true }
  }

  const { turma } = data

  return {
    props: {
      session: session,
      id: turma.id,
      title: turma.title,
      code: turma.code,
      status: turma.status,
      description: turma.description,
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
