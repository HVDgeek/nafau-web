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

export default function Courses(props: YourCoursesTemplateProps) {
  const router = useRouter()
  const [session, loadingSession] = useSession()

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
      limit: 10,
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
      avatar: `${process.env.NEXT_PUBLIC_API_URL}${turma?.teachers[0]?.user?.avatar?.src}`
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
      newCourses={studentCourses as NewCourses[]}
      titleSemTurma="Este aluno não tem turmas adicionadas!"
      descriptionSemTurma="Você precisa adicionar novas turma para este aluno. Abraços 😃"
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
