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
import { useSubscription } from 'hooks/use-subscription'
import { useToast } from '@chakra-ui/toast'
import { getImageUrl } from 'utils/getImageUrl'

export default function StudentClass(props: YourUsersTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()
  const { state, addTeacherToCourse } = useSubscription()
  const toast = useToast()

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
    avatar: `${getImageUrl(prof.user?.avatar?.src)}`,
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
        avatar: `${getImageUrl(prof.user?.avatar?.src)}`
      }
    }
    return null
  })

  const onSubmit = () => {
    if (state.selectUsers.length === 0) {
      toast({
        title: `Selecione algum professor 😢`,
        // variant: 'left-accent',
        position: 'top-right',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        isClosable: true
      })
      return
    }

    const existsIds = data?.turma?.teachers.map((prof) => prof.id)
    const newIds = state.selectUsers.map((user) => user.id)

    if (courseId && existsIds) {
      addTeacherToCourse(courseId, {
        ids: [...existsIds, ...newIds]
      })
    }

    if (courseId && !existsIds) {
      addTeacherToCourse(courseId, {
        ids: newIds
      })
    }
  }

  const onRemove = (id: string) => {
    const existsIds = data?.turma?.teachers.map((prof) => prof.id)

    if (courseId && existsIds) {
      addTeacherToCourse(courseId, {
        ids: existsIds?.filter((userId) => userId !== id)
      })
    }
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
      route="teacher"
      title="Professores"
      onSubmit={onSubmit}
      onRemove={onRemove}
      newUsers={courseUsers as UserItemProps[]}
      withRegister={true}
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
      session: session
    }
  }
}
