import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { useQueryAtendentes } from 'graphql/queries/atendentes'
import { UserCardProps } from 'components/UserCard'
import protectedRoutes from 'utils/protected-routes'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import { useAtendente } from 'hooks/use-atendente'
import { getImageUrl } from 'utils/getImageUrl'
import PrivatePage from 'components/PrivatePage'

export default function AttendantsPage(props: UsersTemplateProps) {
  const [session, loadingSession] = useSession()
  const { getProfiles, loading: loadingProfiles } = useUser()
  const { asPath, push } = useRouter()
  const { removeAtendente } = useAtendente()

  let hasMoreAtendentes = false
  const { data, loading, fetchMore } = useQueryAtendentes({
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 40,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  if (data) {
    hasMoreAtendentes =
      data?.atendentes.length <
      (data?.atendentesConnection?.values?.length || 0)
  }

  const users = data?.atendentes.map((atendente) => ({
    id: atendente.id,
    name: atendente.name,
    email: atendente.user?.email,
    username: atendente.user?.username,
    avatar: `${getImageUrl(atendente.user?.avatar?.src)}`,
    isActive: !atendente.user?.blocked
  })) as UserCardProps[]

  const canManageAtendente = getProfiles()?.canManageAtendente

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canManageAtendente?.isActive) {
    return <PrivatePage />
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const onRemove = (id: string) => {
    removeAtendente(id)
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.atendentes.length,
        institutionId: (props.session as SessionProps).user?.institution
      }
    })
  }

  return (
    <UsersTemplate
      {...props}
      route="attendant"
      loading={loading}
      users={users}
      hasMore={hasMoreAtendentes}
      onRemove={onRemove}
      onSubmit={() => {
        push('attendant/create')
      }}
      handleShowMore={handleShowMore}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      title: 'Atendentes',
      session: session
    }
  }
}
