import { FormikHelpers } from 'formik'

import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import CourseRegisterTemplate, {
  CourseRegisterTemplateProps
} from 'templates/CourseRegister'
import protectedRoutes from 'utils/protected-routes'

export type Values = Omit<
  CourseRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues'
>

export default function CreateCourse(props: CourseRegisterTemplateProps) {
  const router = useRouter()

  const [session, loadingSession] = useSession()

  const initialValues = {
    id: props.id,
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
    console.log('VALUES', values)
  }

  return (
    <CourseRegisterTemplate
      {...props}
      onSubmit={onSubmit}
      initialValues={initialValues}
      title="Cadastrar nova turma"
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session: session,
      id: '',
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
