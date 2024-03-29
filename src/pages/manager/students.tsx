import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { useQueryAlunos } from 'graphql/queries/alunos'
import UsersTemplate, { UsersTemplateProps } from 'templates/Users'
import { UserCardProps } from 'components/UserCard'
import protectedRoutes from 'utils/protected-routes'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import { useStudent } from 'hooks/use-student'
import { getImageUrl } from 'utils/getImageUrl'
import PrivatePage from 'components/PrivatePage'

export default function StudentsPage(props: UsersTemplateProps) {
  const [session, loadingSession] = useSession()
  const { getProfiles, loading: loadingProfiles } = useUser()
  const { asPath, push } = useRouter()
  const { removeStudent } = useStudent()

  let hasMoreAlunos = false
  const { data, loading, fetchMore } = useQueryAlunos({
    // notifyOnNetworkStatusChange: true,
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 40,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  if (data) {
    hasMoreAlunos =
      data?.alunos.length < (data?.alunosConnection?.values?.length || 0)
  }

  const users = data?.alunos.map((aluno) => ({
    id: aluno.id,
    name: aluno.name,
    email: aluno.user?.email,
    username: aluno.user?.username,
    avatar: `${getImageUrl(aluno.user?.avatar?.src)}`,
    isActive: !aluno.user?.blocked
  })) as UserCardProps[]

  const canManageStudent = getProfiles()?.canManageAluno

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canManageStudent?.isActive) {
    return <PrivatePage />
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const onRemove = (id: string) => {
    removeStudent(id)
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.alunos.length,
        institutionId: (props.session as SessionProps).user?.institution
      }
    })
  }

  return (
    <UsersTemplate
      {...props}
      loading={loading}
      users={users}
      route="student"
      title="Estudantes"
      hasMore={hasMoreAlunos}
      onRemove={onRemove}
      onSubmit={() => {
        push('student/create')
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
      title: 'Estudantes',
      session: session
    }
  }
}
