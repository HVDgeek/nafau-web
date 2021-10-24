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

export type Values = Omit<
  UsersRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues' | 'numeroDeMatricula'
> & {
  username: string
  isActive: boolean
  password?: string
  confirm_password?: string
}

export default function Index(props: UsersRegisterTemplateProps) {
  const initialValues = {
    name: props.name,
    email: props.user?.email,
    sexo: props.sexo,
    numero_do_BI: props.numero_do_BI,
    birthday: props.birthday,
    telefone: props.telefone,
    username: props.user?.username,
    isActive: props.user?.isActive,
    password: '',
    confirm_password: ''
  }

  const onSubmit = async (
    values: Values,
    { setErrors, resetForm }: FormikHelpers<Values>
  ) => {
    console.log('ON SUBMIT', JSON.stringify(values, null, 2))
  }

  return (
    <UsersRegisterTemplate
      {...props}
      onSubmit={onSubmit}
      initialValues={initialValues}
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
    variables: { id: `${params?.id}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.professore) {
    return { notFound: true }
  }

  const { professore } = data

  return {
    props: {
      name: professore.name,
      sexo: professore.sexo,
      birthday: professore.birthday,
      telefone: professore.telefone,
      numero_do_BI: professore.numero_do_BI,
      user: {
        email: professore.user?.email,
        username: professore.user?.username,
        avatar: `http://localhost:1337${professore.user?.avatar?.src}`,
        isActive: !professore.user?.blocked
      }
    }
  }
}
