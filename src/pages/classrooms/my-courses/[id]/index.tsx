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
import { getImageUrl } from 'utils/getImageUrl'
import { FormikHelpers } from 'formik'

export type Values = {
  title: string
  description: string
}

export default function Index(props: ClassroomTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  const onSubmit = async (
    values: Values,
    { setErrors, resetForm }: FormikHelpers<Values>
  ) => {
    console.log('DATA => ', values)
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return <Classroom {...props} links={classroomsMock} onSubmit={onSubmit} />
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
      lessons: turma.aulas.map((aula, index) => ({
        id: aula.id,
        title: `Aula ${index + 1} - ${aula.title}`,
        description: aula.description,
        files: aula.arquivo?.map((file) => ({
          id: file?.id,
          title: file?.name,
          description: file?.description,
          url: `${getImageUrl(file?.files[0].url)}`
        })),
        audios: aula.audio?.map((aud) => ({
          id: aud?.id,
          title: aud?.title,
          description: aud?.description,
          url: aud?.url
        })),
        videos: aula.video?.map((vid) => ({
          id: vid?.id,
          title: vid?.title,
          description: vid?.description,
          url: vid?.url
        })),
        links: aula.links?.map((link) => ({
          id: link?.id,
          title: link?.title,
          description: link?.description,
          url: link?.url
        })),
        updated_at: aula.updated_at
      })),
      courseInfo: {
        title: turma?.title,
        status: turma?.status,
        description: turma?.description,
        code: turma?.code
      }
    }
  }
}
