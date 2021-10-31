import { GetServerSidePropsContext } from 'next'
import { FormikHelpers } from 'formik'
import { initializeApollo } from 'utils/apollo'

import {
  QueryAtendenteById,
  QueryAtendenteByIdVariables
} from 'graphql/generated/QueryAtendenteById'
import { QUERY_ATENDENTE_BY_ID } from 'graphql/queries/atendentes'
import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'
import protectedRoutes from 'utils/protected-routes'
import { Base64 } from 'js-base64'

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
      title={props.name}
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
    QueryAtendenteById,
    QueryAtendenteByIdVariables
  >({
    query: QUERY_ATENDENTE_BY_ID,
    variables: { id: Base64.decode(`${params?.id}`) },
    fetchPolicy: 'no-cache'
  })

  if (!data.atendente) {
    return { notFound: true }
  }

  const { atendente } = data

  return {
    props: {
      name: atendente.name,
      sexo: atendente.sexo,
      birthday: atendente.birthday,
      telefone: atendente.telefone,
      numero_do_BI: atendente.numero_do_BI,
      user: {
        email: atendente.user?.email,
        username: atendente.user?.username,
        avatar: `http://localhost:1337${atendente.user?.avatar?.src}`,
        isActive: !atendente.user?.blocked
      }
    }
  }
}
