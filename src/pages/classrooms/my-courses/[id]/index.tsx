import Classroom, { ClassroomTemplateProps } from 'templates/Classroom'
import lessonsMock from 'components/ClassItem/mock'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import classroomsMock from 'components/Sidebar/classroomsMock'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import {
  QueryTurmaById,
  QueryTurmaByIdVariables
} from 'graphql/generated/QueryTurmaById'
import { QUERY_TURMA_BY_ID } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'

export default function Index(props: ClassroomTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }
  return <Classroom {...props} links={classroomsMock} />
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
      lessons: lessonsMock,
      courseInfo: {
        title: turma?.title,
        status: turma?.status,
        description: turma?.description,
        code: turma?.code
      }
    }
  }
}