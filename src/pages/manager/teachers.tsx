import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { useQueryProfessores } from 'graphql/queries/professores'
import protectedRoutes from 'utils/protected-routes'
import { UserCardProps } from 'components/UserCard'
import { SessionProps } from 'pages/api/auth/[...nextauth]'

export default function StudentsPage(props: UsersTemplateProps) {
  const [session, loadingSession] = useSession()
  const { asPath } = useRouter()

  let hasMoreProfessores = false
  const { data, loading, fetchMore } = useQueryProfessores({
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 9,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  if (data) {
    hasMoreProfessores =
      data?.professores.length <
      (data?.professoresConnection?.values?.length || 0)
  }

  const users = data?.professores.map((prof) => ({
    id: prof.id,
    name: prof.name,
    email: prof.user?.email,
    username: prof.user?.username,
    avatar: `http://localhost:1337${prof.user?.avatar?.src}`,
    isActive: !prof.user?.blocked
  })) as UserCardProps[]

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 9,
        start: data?.professores.length,
        institutionId: (props.session as SessionProps).user?.institution
      }
    })
  }

  return (
    <UsersTemplate
      {...props}
      route="teacher"
      loading={loading}
      users={users}
      hasMore={hasMoreProfessores}
      onSubmit={() => {
        console.log('ADD PROFESSORES')
      }}
      handleShowMore={handleShowMore}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      title: 'Professores',
      session: session
    }
  }
}
