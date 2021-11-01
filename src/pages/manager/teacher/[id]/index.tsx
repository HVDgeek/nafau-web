import { GetServerSidePropsContext } from 'next'
import { initializeApollo } from 'utils/apollo'
import { FormikHelpers } from 'formik'

import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'
import { QUERY_PROFESSOR_BY_ID } from 'graphql/queries/professores'
import {
  QueryProfessorById,
  QueryProfessorByIdVariables
} from 'graphql/generated/QueryProfessorById'
import protectedRoutes from 'utils/protected-routes'
import { Base64 } from 'js-base64'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { ENUM_PROFESSORES_SEXO } from 'graphql/generated/globalTypes'
import { useTeacher } from 'hooks/use-teacher'
import { v4 as uuidV4 } from 'uuid'

export type Values = Omit<
  UsersRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues' | 'numeroDeMatricula'
> & {
  username: string
  email: string
  isActive: boolean
  password?: string
  confirm_password?: string
}

export default function Index(props: UsersRegisterTemplateProps) {
  const { updateTeacher } = useTeacher()

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
    updateTeacher(props.id, {
      blocked: !values.isActive,
      email: values.email,
      institution: (props.session as SessionProps).user.institution, // Não atualiza
      password: values.password!,
      username: `${values.username}*#nafau#*${uuidV4()}`,
      birthday: values.birthday,
      name: values.name,
      numero_do_BI: values.numero_do_BI,
      sexo: values.sexo as ENUM_PROFESSORES_SEXO,
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

  const { params } = context

  const { data } = await apolloClient.query<
    QueryProfessorById,
    QueryProfessorByIdVariables
  >({
    query: QUERY_PROFESSOR_BY_ID,
    variables: { id: Base64.decode(`${params?.id}`) },
    fetchPolicy: 'no-cache'
  })

  if (!data.professore) {
    return { notFound: true }
  }

  const { professore } = data

  return {
    props: {
      session: session,
      id: professore.id,
      name: professore.name,
      sexo: professore.sexo,
      birthday: professore.birthday,
      telefone: professore.telefone,
      numero_do_BI: professore.numero_do_BI,
      user: {
        email: professore.user?.email,
        username: professore.user?.username,
        avatar: `${process.env.NEXT_PUBLIC_API_URL}${professore.user?.avatar?.src}`,
        isActive: !professore.user?.blocked
      }
    }
  }
}
