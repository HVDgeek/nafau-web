import { GetServerSidePropsContext } from 'next'
import { initializeApollo } from 'utils/apollo'
import { FormikHelpers } from 'formik'

import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'
import { QUERY_ALUNO_BY_ID } from 'graphql/queries/alunos'
import {
  QueryAlunoById,
  QueryAlunoByIdVariables
} from 'graphql/generated/QueryAlunoById'
import protectedRoutes from 'utils/protected-routes'
import { Base64 } from 'js-base64'
import { useStudent } from 'hooks/use-student'
import { ENUM_ALUNOS_SEXO } from 'graphql/generated/globalTypes'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { v4 as uuidV4 } from 'uuid'
import { getImageUrl } from 'utils/getImageUrl'

export type Values = Omit<
  UsersRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues'
> & {
  username: string
  email: string
  isActive: boolean
  password?: string
  confirm_password?: string
}

export default function UpdateStudentPage(props: UsersRegisterTemplateProps) {
  const { updateStudent } = useStudent()

  const initialValues = {
    name: props.name,
    email: props.user?.email,
    sexo: props.sexo,
    numero_do_BI: props.numero_do_BI,
    birthday: props.birthday,
    telefone: props.telefone,
    username: props.user.username?.split('*#nafau#*')[0] || props.user.username,
    isActive: props.user?.isActive,
    password: '',
    confirm_password: ''
  }

  const onSubmit = async (
    values: Values,
    { setErrors, resetForm }: FormikHelpers<Values>
  ) => {
    updateStudent(props.id, {
      blocked: !values.isActive,
      email: values.email,
      institution: (props.session as SessionProps).user.institution, // Não atualiza
      password: values.password!,
      username: `${values.username}*#nafau#*${uuidV4()}`,
      birthday: values.birthday,
      name: values.name,
      numero_do_BI: values.numero_do_BI,
      numeroDeMatricula: values.numeroDeMatricula,
      sexo: values.sexo as ENUM_ALUNOS_SEXO,
      telefone: values.telefone
    })
  }

  return (
    <UsersRegisterTemplate
      {...props}
      title={props.name}
      onSubmit={onSubmit}
      initialValues={initialValues}
      createForm={false}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { params } = context

  const { data } = await apolloClient.query<
    QueryAlunoById,
    QueryAlunoByIdVariables
  >({
    query: QUERY_ALUNO_BY_ID,
    variables: { id: Base64.decode(`${params?.id}`) },
    fetchPolicy: 'no-cache'
  })

  if (!data.aluno) {
    return {
      notFound: true
    }
  }

  const { aluno } = data

  return {
    props: {
      id: data.aluno.id,
      session: session,
      name: aluno.name,
      sexo: aluno.sexo,
      birthday: aluno.birthday,
      telefone: aluno.telefone,
      numero_do_BI: aluno.numero_do_BI,
      numeroDeMatricula: aluno.numeroDeMatricula,
      user: {
        email: aluno.user?.email,
        username: aluno.user?.username,
        avatar: `${getImageUrl(aluno.user?.avatar?.src)}`,
        isActive: !aluno.user?.blocked
      }
    }
  }
}
