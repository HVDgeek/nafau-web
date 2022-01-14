import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'

import Course, { CourseTemplateProps } from 'templates/Course'
import sidebarManagerMock from 'components/Sidebar/managerMock'
import { useQueryTurmas } from 'graphql/queries/turmas'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { ClassCardProps } from 'components/ClassCard'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { useCourse } from 'hooks/use-turma'
import { getImageUrl } from 'utils/getImageUrl'
import PrivatePage from 'components/PrivatePage'

export default function Courses(props: CourseTemplateProps) {
  const [session, loadingSession] = useSession()
  const { getProfiles, loading: loadingProfiles } = useUser()
  const { asPath, push } = useRouter()
  const { removeCourse } = useCourse()

  let hasMoreTurmas = false
  const { data, loading, fetchMore } = useQueryTurmas({
    // notifyOnNetworkStatusChange: true,
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 10,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  if (data) {
    hasMoreTurmas =
      data?.turmas.length < (data?.turmasConnection?.values?.length || 0)
  }

  const courses = data?.turmas.map((turma) => ({
    id: turma.id,
    title: turma.title,
    code: turma.code,
    status: turma.status,
    // timing: 50,
    lastLesson: turma.aulas.length && {
      title: turma.aulas[turma.aulas.length].title
    },
    teacher: {
      name: turma?.teachers[0]?.name,
      avatar: `${getImageUrl(turma?.teachers[0]?.user?.avatar?.src)}`
    },
    countAlunos: turma.alunos.length
  })) as ClassCardProps[]

  const canManageTurma = getProfiles()?.canManageTurma

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canManageTurma?.isActive) {
    return <PrivatePage />
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }

  const onRemove = (id: string) => {
    removeCourse(id)
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 9,
        start: data?.turmas.length,
        institutionId: (props.session as SessionProps).user?.institution
      }
    })
  }

  return (
    <Course
      {...props}
      loading={loading}
      courses={courses}
      withRegister
      route="course"
      links={sidebarManagerMock}
      titleSemTurma="Nenhuma turma cadastrada!"
      descriptionSemTurma="Você precisa cadastrar novas turma para que apareça aqui. Abraços 😃"
      hasMore={hasMoreTurmas}
      onRemove={onRemove}
      onSubmit={() => {
        push('course/create')
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
      title: 'Turmas',
      session: session
    }
  }
}
