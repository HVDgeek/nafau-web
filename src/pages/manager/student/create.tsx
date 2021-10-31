import { GetServerSidePropsContext } from 'next'
import { initializeApollo } from 'utils/apollo'
import { FormikHelpers } from 'formik'

import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'

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
      title="Cadastrar novo Estudante"
      onSubmit={onSubmit}
      initialValues={initialValues}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session: session,
      name: '',
      sexo: '',
      birthday: '',
      telefone: '',
      numero_do_BI: '',
      numeroDeMatricula: '',
      user: {
        email: '',
        username: '',
        avatar: '',
        isActive: true
      }
    }
  }
}
