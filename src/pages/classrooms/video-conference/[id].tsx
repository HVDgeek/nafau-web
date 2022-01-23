import sidebarClassroomsMock from 'components/Sidebar/classroomsMock'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

import VideoConferenceTemplate, {
  VideoConferenceTemplateProps
} from 'templates/VideoConference'
import { initializeApollo } from 'utils/apollo'
import {
  QueryTurmaById,
  QueryTurmaByIdVariables
} from 'graphql/generated/QueryTurmaById'
import { QUERY_TURMA_BY_ID } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import PrivatePage from 'components/PrivatePage'

export default function Classrooms(props: VideoConferenceTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  const {
    getTurmas,
    loading,
    getProfiles,
    loading: loadingProfiles
  } = useUser()

  const canSeeAulas = getProfiles()?.canSeeAulas

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canSeeAulas?.isActive) {
    return <PrivatePage />
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return <VideoConferenceTemplate {...props} links={sidebarClassroomsMock} />
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
      room: {
        password: Base64.encode(turma.title),
        title: `${turma.title} ${turma?.code}`,
        username:
          session.user?.name?.split('*#nafau#*')[0] || session.user?.name
      }
    }
  }
}
