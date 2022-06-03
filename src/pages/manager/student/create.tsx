import { GetServerSidePropsContext } from 'next'
import { FormikHelpers } from 'formik'

import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'

import protectedRoutes from 'utils/protected-routes'
import { useStudent } from 'hooks/use-student'
import { SessionProps } from 'pages/api/auth/[...nextauth]'

import { v4 as uuidV4 } from 'uuid'
import { ENUM_ALUNOS_SEXO } from 'graphql/generated/globalTypes'
import { useToast } from '@chakra-ui/toast'
import { useSession } from 'next-auth/client'
import { useUser } from 'hooks/use-user'
import CheckingProfile from 'components/CheckingProfile'
import PrivatePage from 'components/PrivatePage'
import { initializeApollo } from 'utils/apollo'
import {
  QueryPerfis,
  QueryPerfisVariables
} from 'graphql/generated/QueryPerfis'
import { QUERY_PERFIS } from 'graphql/queries/perfis'

export type Values = Omit<
  UsersRegisterTemplateProps,
  'onSubmit' | 'user' | 'initialValues'
> & {
  username: string
  email: string
  isActive: boolean
  password?: string
  confirm_password?: string
  profile: string
}

export default function CreateStudentPage(props: UsersRegisterTemplateProps) {
  const { addStudent } = useStudent()
  const toast = useToast()
  const { getProfiles, loading: loadingProfiles } = useUser()
  const [session] = useSession()

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
    if (!values.password) {
      return toast({
        title: `Preencha o campo de senha 😢`,
        // variant: 'left-accent',
        position: 'top-right',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        isClosable: true
      })
    }

    if (!values.sexo) {
      return toast({
        title: `Preencha o campo de sexo 😢`,
        // variant: 'left-accent',
        position: 'top-right',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        isClosable: true
      })
    }

    if (values.password !== values.confirm_password) {
      return toast({
        title: `As senhas são diferentes 😢`,
        // variant: 'left-accent',
        position: 'top-right',
        description: 'Verifique os dados e tente novamente',
        status: 'error',
        isClosable: true
      })
    }

    addStudent({
      blocked: !values.isActive,
      email: values.email,
      institution: (props.session as SessionProps).user.institution,
      password: values.password!,
      username: `${values.username}*#nafau#*${uuidV4()}`,
      birthday: values.birthday,
      name: values.name,
      numero_do_BI: values.numero_do_BI,
      numeroDeMatricula: values.numeroDeMatricula,
      sexo: values.sexo as ENUM_ALUNOS_SEXO,
      telefone: values.telefone,
      profileId: values.profile
    })
  }

  const canManageStudent = getProfiles()?.canManageAluno

  if (loadingProfiles) {
    return <CheckingProfile />
  }

  if (session && !canManageStudent?.isActive) {
    return <PrivatePage />
  }

  return (
    <UsersRegisterTemplate
      {...props}
      perfis={props.perfis.filter((profile) =>
        profile.name.includes('STUDENT')
      )}
      title="Cadastrar novo Estudante"
      onSubmit={onSubmit}
      initialValues={initialValues}
    />
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<QueryPerfis, QueryPerfisVariables>({
    query: QUERY_PERFIS,
    variables: {
      limit: 10
    }
  })

  return {
    props: {
      session: session,
      perfis: data.perfis,
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
