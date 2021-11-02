import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import YourUsersTemplate, { YourUsersTemplateProps } from 'templates/YourUsers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { useQueryTurmaById } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'
import { UserCardProps } from 'components/UserCard'
import { useQueryAlunos } from 'graphql/queries/alunos'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { UserItemProps } from 'components/UserItem'
import { useSubscription } from 'hooks/use-subscription'

export default function StudentClass(props: YourUsersTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()
  const { state } = useSubscription()

  const { data, loading } = useQueryTurmaById({
    skip: !session?.user?.email || !router.query?.id,
    context: { session },
    variables: {
      id: Base64.decode(router.query?.id as string)
    }
  })

  const { data: dataStudents, loading: loadingStudents } = useQueryAlunos({
    // notifyOnNetworkStatusChange: true,
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 100,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  const users = data?.turma?.alunos.map((aluno) => ({
    id: aluno.id,
    name: aluno.name,
    email: aluno.user?.email,
    username: aluno.user?.username,
    avatar: `${process.env.NEXT_PUBLIC_API_URL}${aluno.user?.avatar?.src}`,
    isActive: !aluno.user?.blocked
  })) as UserCardProps[]

  const courseId = data?.turma?.id

  const courseUsers = dataStudents?.alunos.map((aluno) => {
    const studentExists = aluno.turmas.find((turma) => turma.id === courseId)

    if (!studentExists) {
      return {
        id: aluno.id,
        name: aluno.name,
        email: aluno.user?.email,
        avatar: `${process.env.NEXT_PUBLIC_API_URL}${aluno.user?.avatar?.src}`
      }
    }
    return null
  })

  const onSubmit = () => {
    console.log('STATE  => ', state)
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <YourUsersTemplate
      {...props}
      loading={loading}
      users={users}
      route="student"
      title="Alunos"
      onSubmit={onSubmit}
      newUsers={courseUsers as UserItemProps[]}
      withRegister={true}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      session: session
    }
  }
}
