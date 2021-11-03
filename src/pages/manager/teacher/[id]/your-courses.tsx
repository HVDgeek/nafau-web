import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'
import YourCoursesTemplate, {
  NewCourses,
  YourCoursesTemplateProps
} from 'templates/YourCourses'
import { useSession } from 'next-auth/client'
import protectedRoutes from 'utils/protected-routes'
import { useQueryProfessorById } from 'graphql/queries/professores'
import { Base64 } from 'js-base64'
import { ClassCardProps } from 'components/ClassCard'
import { useQueryTurmas } from 'graphql/queries/turmas'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { useSubscription } from 'hooks/use-subscription'
import { useToast } from '@chakra-ui/toast'
import { getImageUrl } from 'utils/getImageUrl'

export default function Courses(props: YourCoursesTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()
  const { state, addCourseToTeacher } = useSubscription()
  const toast = useToast()

  const { data, loading } = useQueryProfessorById({
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
      limit: 10,
      institutionId: (props.session as SessionProps)?.user?.institution
    }
  })

  const courses = data?.professore?.turmas.map((turma) => ({
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

  const teacherId = data?.professore?.id

  const teacherCourses = dataTurmas?.turmas.map((turma) => {
    const classExists = turma.teachers.find(
      (teacher) => teacher.id === teacherId
    )

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

    const existsIds = data?.professore?.turmas.map((prof) => prof.id)
    const newIds = state.selectUsers.map((user) => user.id)

    if (teacherId && existsIds) {
      addCourseToTeacher(teacherId, {
        ids: [...existsIds, ...newIds]
      })
    }

    if (teacherId && !existsIds) {
      addCourseToTeacher(teacherId, {
        ids: newIds
      })
    }
  }

  const onRemove = (id: string) => {
    const existsIds = data?.professore?.turmas.map((prof) => prof.id)

    if (teacherId && existsIds) {
      addCourseToTeacher(teacherId, {
        ids: existsIds?.filter((turmaId) => turmaId !== id)
      })
    }
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
      onSubmit={onSubmit}
      courses={courses}
      onRemove={onRemove}
      newCourses={teacherCourses as NewCourses[]}
      titleSemTurma="Este professor não tem turmas adicionadas!"
      descriptionSemTurma="Você precisa adicionar novas turma para este professor. Abraços 😃"
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
