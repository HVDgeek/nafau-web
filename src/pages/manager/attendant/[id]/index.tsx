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
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { useAtendente } from 'hooks/use-atendente'
import { ENUM_ATENDENTES_SEXO } from 'graphql/generated/globalTypes'
import { v4 as uuidV4 } from 'uuid'
import { getImageUrl } from 'utils/getImageUrl'
import { useSession } from 'next-auth/client'
import PrivatePage from 'components/PrivatePage'
import {
  QueryPerfis,
  QueryPerfisVariables
} from 'graphql/generated/QueryPerfis'
import { QUERY_PERFIS } from 'graphql/queries/perfis'

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
  const { updateAtendente } = useAtendente()
  const [session] = useSession()

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
    updateAtendente(props.id, {
      blocked: !values.isActive,
      email: values.email,
      institution: (props.session as SessionProps).user.institution, // Não atualiza
      password: values.password!,
      username: `${values.username}*#nafau#*${uuidV4()}`,
      birthday: values.birthday,
      name: values.name,
      numero_do_BI: values.numero_do_BI,
      sexo: values.sexo as ENUM_ATENDENTES_SEXO,
      telefone: values.telefone
    })
  }

  const canManageAttendant = (session as SessionProps)?.user.profile
    .canManageAtendente

  if (session && !canManageAttendant?.isActive) {
    return <PrivatePage />
  }

  return (
    <UsersRegisterTemplate
      {...props}
      perfis={props.perfis.filter((profile) =>
        profile.name.includes('ATTENDANT')
      )}
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

  const { data: dataProfile } = await apolloClient.query<
    QueryPerfis,
    QueryPerfisVariables
  >({
    query: QUERY_PERFIS,
    variables: {
      limit: 10
    }
  })

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
      perfis: dataProfile.perfis,
      session: session,
      id: atendente.id,
      name: atendente.name,
      sexo: atendente.sexo,
      birthday: atendente.birthday,
      telefone: atendente.telefone,
      numero_do_BI: atendente.numero_do_BI,
      user: {
        email: atendente.user?.email,
        username: atendente.user?.username,
        avatar: `${getImageUrl(atendente.user?.avatar?.src)}`,
        isActive: !atendente.user?.blocked
      }
    }
  }
}
