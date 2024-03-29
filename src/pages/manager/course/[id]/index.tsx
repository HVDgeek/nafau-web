import { FormikHelpers } from 'formik'
import { ENUM_TURMAS_STATUS } from 'graphql/generated/globalTypes'
import {
  QueryTurmaById,
  QueryTurmaByIdVariables
} from 'graphql/generated/QueryTurmaById'
import { QUERY_TURMA_BY_ID } from 'graphql/queries/turmas'
import { useCourse } from 'hooks/use-turma'
import { Base64 } from 'js-base64'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import CourseRegisterTemplate, {
  CourseRegisterTemplateProps
} from 'templates/CourseRegister'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'
import PrivatePage from 'components/PrivatePage'

export type Values = Omit<
  CourseRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues'
>

export default function Index(props: CourseRegisterTemplateProps) {
  const router = useRouter()
  const { updateCourse } = useCourse()
  const { getProfiles, loading: loadingProfiles } = useUser()

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
    updateCourse(props.id, {
      title: values.title,
      code: values.code,
      status: values.status as ENUM_TURMAS_STATUS,
      description: values.description,
      institution: (props.session as SessionProps).user.institution
    })
  }

  const canManageTurma = getProfiles()?.canManageTurma

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canManageTurma?.isActive) {
    return <PrivatePage />
  }

  return (
    <CourseRegisterTemplate
      {...props}
      title={props.title}
      onSubmit={onSubmit}
      initialValues={initialValues}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

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
