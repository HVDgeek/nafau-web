import { FormikHelpers } from 'formik'

import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import CourseRegisterTemplate, {
  CourseRegisterTemplateProps
} from 'templates/CourseRegister'
import protectedRoutes from 'utils/protected-routes'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import { useCourse } from 'hooks/use-turma'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { ENUM_TURMAS_STATUS } from 'graphql/generated/globalTypes'
import PrivatePage from 'components/PrivatePage'

export type Values = CourseRegisterTemplateProps

export default function CreateCourse(props: CourseRegisterTemplateProps) {
  const router = useRouter()
  const { getProfiles, loading: loadingProfiles } = useUser()
  const { addCourse } = useCourse()

  const [session, loadingSession] = useSession()

  const initialValues = {
    title: props.title,
    code: props.code,
    status: props.status,
    description: props.description
  }

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  const onSubmit = async (
    values: Values,
    { setErrors, resetForm }: FormikHelpers<Values>
  ) => {
    addCourse({
      title: values.title,
      code: values.code,
      status: values.status as ENUM_TURMAS_STATUS,
      description: values.description,
      institution: (props.session as SessionProps).user.institution
    })
  }

  const canManageTurma = getProfiles()?.canManageTurma

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canManageTurma?.isActive) {
    return <PrivatePage />
  }

  return (
    <CourseRegisterTemplate
      {...props}
      onSubmit={onSubmit}
      initialValues={initialValues}
      title="Cadastrar nova turma/curso"
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
      session: session,
      title: '',
      code: '',
      status: 'EMCURSO',
      description: '',
      alunos: [],
      professores: [],
      aulas: []
    }
  }
}
