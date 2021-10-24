import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { useQueryAtendentes } from 'graphql/queries/atendentes'
import { UserCardProps } from 'components/UserCard'
import protectedRoutes from 'utils/protected-routes'

export default function StudentsPage(props: UsersTemplateProps) {
  const [session, loadingSession] = useSession()
  const { asPath } = useRouter()

  let hasMoreAtendentes = false
  const { data, loading, fetchMore } = useQueryAtendentes({
    variables: { limit: 9 }
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
    avatar: `http://localhost:1337${atendente.user?.avatar?.src}`,
    isActive: !atendente.user?.blocked
  })) as UserCardProps[]

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 9, start: data?.atendentes.length }
    })
  }

  return (
    <UsersTemplate
      {...props}
      route="attendant"
      loading={loading}
      users={users}
      hasMore={hasMoreAtendentes}
      onSubmit={() => {
        console.log('ADD ATENDENTES')
      }}
      handleShowMore={handleShowMore}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      title: 'Atendentes'
    }
  }
}
