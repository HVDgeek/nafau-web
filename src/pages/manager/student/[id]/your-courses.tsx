import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'
import YourCoursesTemplate, {
  NewCourses,
  YourCoursesTemplateProps
} from 'templates/YourCourses'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { useQueryAlunoById } from 'graphql/queries/alunos'
import { Base64 } from 'js-base64'
import { ClassCardProps } from 'components/ClassCard'
import { useQueryTurmas } from 'graphql/queries/turmas'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { useSubscription } from 'hooks/use-subscription'
import { useToast } from '@chakra-ui/toast'
import { getImageUrl } from 'utils/getImageUrl'
import PrivatePage from 'components/PrivatePage'

export default function Courses(props: YourCoursesTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()
  const { state, addCourseToStudent } = useSubscription()
  const toast = useToast()

  const { data, loading } = useQueryAlunoById({
    skip: !session?.user?.email || !router.query?.id,
    context: { session },
    variables: {
      id: Base64.decode(router.query?.id as string)
    }
  })

  const { data: dataTurmas, loading: loadingTurmas } = useQueryTurmas({
    // notifyOnNetworkStatusChange: true,
    skip: !session?.user?.email, // Não roda se não tiver session
    context: { session }, // passando a session de autentication
    variables: {
      limit: 100,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  const courses = data?.aluno?.turmas.map((turma) => ({
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

  const studentId = data?.aluno?.id

  const studentCourses = dataTurmas?.turmas.map((turma) => {
    const classExists = turma.alunos.find((aluno) => aluno.id === studentId)

    if (!classExists) {
      return {
        id: turma.id,
        code: turma.code,
        title: turma.title
      }
    }
    return null
  })

  const onSubmit = () => {
    if (state.selectUsers.length === 0) {
      toast({
        title: `Selecione alguma turma 😢`,
        // variant: 'left-accent',
        position: 'top-right',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        isClosable: true
      })
      return
    }

    const existsIds = data?.aluno?.turmas.map((aluno) => aluno.id)
    const newIds = state.selectUsers.map((user) => user.id)

    if (studentId && existsIds) {
      addCourseToStudent(studentId, {
        ids: [...existsIds, ...newIds]
      })
    }

    if (studentId && !existsIds) {
      addCourseToStudent(studentId, {
        ids: newIds
      })
    }
  }

  const onRemove = (id: string) => {
    const existsIds = data?.aluno?.turmas.map((aluno) => aluno.id)

    if (studentId && existsIds) {
      addCourseToStudent(studentId, {
        ids: existsIds?.filter((turmaId) => turmaId !== id)
      })
    }
  }

  const canManageStudent = (session as SessionProps).user.profile.canManageAluno

  if (!canManageStudent?.isActive) {
    return <PrivatePage />
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <YourCoursesTemplate
      {...props}
      title="Turmas"
      route="course"
      withRegister={true}
      loading={loading}
      courses={courses}
      onSubmit={onSubmit}
      onRemove={onRemove}
      newCourses={studentCourses as NewCourses[]}
      titleSemTurma="Este aluno não tem turmas adicionadas!"
      descriptionSemTurma="Você precisa adicionar novas turma para este aluno. Abraços 😃"
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
