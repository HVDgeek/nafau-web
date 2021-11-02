import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import YourUsersTemplate, { YourUsersTemplateProps } from 'templates/YourUsers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { useQueryTurmaById } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'
import { UserCardProps } from 'components/UserCard'
import { UserItemProps } from 'components/UserItem'
import { useQueryProfessores } from 'graphql/queries/professores'
import { SessionProps } from 'pages/api/auth/[...nextauth]'

export default function StudentClass(props: YourUsersTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

  const { data, loading } = useQueryTurmaById({
    skip: !session?.user?.email || !router.query?.id,
    context: { session },
    variables: {
      id: Base64.decode(router.query?.id as string)
    }
  })

  const { data: dataTeachers, loading: loadingTeachers } = useQueryProfessores({
    // notifyOnNetworkStatusChange: true,
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 100,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  const users = data?.turma?.teachers.map((prof) => ({
    id: prof.id,
    name: prof.name,
    email: prof.user?.email,
    username: prof.user?.username,
    avatar: `${process.env.NEXT_PUBLIC_API_URL}${prof.user?.avatar?.src}`,
    isActive: !prof.user?.blocked
  })) as UserCardProps[]

  const courseId = data?.turma?.id

  const courseUsers = dataTeachers?.professores.map((prof) => {
    const teacherExists = prof.turmas.find((turma) => turma.id === courseId)

    if (!teacherExists) {
      return {
        id: prof.id,
        name: prof.name,
        email: prof.user?.email,
        avatar: `${process.env.NEXT_PUBLIC_API_URL}${prof.user?.avatar?.src}`
      }
    }
    return null
  })

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <YourUsersTemplate
      {...props}
      loading={loading}
      users={users}
      route="teacher"
      title="Professores"
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
