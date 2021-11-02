import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import YourUsersTemplate, { YourUsersTemplateProps } from 'templates/YourUsers'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { useQueryTurmaById } from 'graphql/queries/turmas'
import { Base64 } from 'js-base64'
import { UserCardProps } from 'components/UserCard'

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

  const users = data?.turma?.alunos.map((aluno) => ({
    id: aluno.id,
    name: aluno.name,
    email: aluno.user?.email,
    username: aluno.user?.username,
    avatar: `${process.env.NEXT_PUBLIC_API_URL}${aluno.user?.avatar?.src}`,
    isActive: !aluno.user?.blocked
  })) as UserCardProps[]

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
