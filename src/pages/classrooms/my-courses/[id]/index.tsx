import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import classroomsMock from 'components/Sidebar/classroomsMock'
import Classroom, { ClassroomTemplateProps } from 'templates/Classroom'
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
import { useAula } from 'hooks/use-aula'

export type Values = {
  title: string
  description: string
}

export default function Index(props: ClassroomTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()
  const toast = useToast()
  const { onClose, addAula } = useAula()

  const onSubmit = async (
    values: Values,
    { setErrors, resetForm }: FormikHelpers<Values>
  ) => {
    if (values.description === '') {
      toast({
        title: `Descrição é obrigatória 😢`,
        // variant: 'left-accent',
        position: 'bottom',
        description: 'A descrição é obrigatória para o cadastro da aula',
        status: 'warning',
        isClosable: true
      })
    } else {
      addAula({
        description: values.description,
        title: values.title,
        idTurma: props.idTurma
      })
    }
  }

  const onRemove = (id: string) => {
    console.log('ID da AULA => ', id)
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <Classroom
      {...props}
      links={classroomsMock}
      onSubmit={onSubmit}
      onRemove={onRemove}
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
      },
      idTurma: turma.id
    }
  }
}
