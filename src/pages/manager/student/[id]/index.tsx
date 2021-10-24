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

export type Values = Omit<
  UsersRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues'
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
    QueryAlunoById,
    QueryAlunoByIdVariables
  >({
    query: QUERY_ALUNO_BY_ID,
    variables: { id: `${params?.id}` },
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
      name: aluno.name,
      sexo: aluno.sexo,
      birthday: aluno.birthday,
      telefone: aluno.telefone,
      numero_do_BI: aluno.numero_do_BI,
      numeroDeMatricula: aluno.numeroDeMatricula,
      user: {
        email: aluno.user?.email,
        username: aluno.user?.username,
        avatar: `http://localhost:1337${aluno.user?.avatar?.src}`,
        isActive: !aluno.user?.blocked
      }
    }
  }
}
