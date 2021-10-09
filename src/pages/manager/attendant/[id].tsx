import {
  QueryAtendenteById,
  QueryAtendenteByIdVariables
} from 'graphql/generated/QueryAtendenteById'
import {
  QueryAtendentes,
  QueryAtendentesVariables
} from 'graphql/generated/QueryAtendentes'
import {
  QUERY_ATENDENTES,
  QUERY_ATENDENTE_BY_ID
} from 'graphql/queries/atendentes'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

export default function Index(props: UsersRegisterTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <UsersRegisterTemplate {...props} />
}

// gerar em build time (/aluno/bla, /aluno/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryAtendentes,
    QueryAtendentesVariables
  >({
    query: QUERY_ATENDENTES,
    variables: { limit: 9 }
  })

  const paths = data.atendentes.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryAtendenteById,
    QueryAtendenteByIdVariables
  >({
    query: QUERY_ATENDENTE_BY_ID,
    variables: { id: `${params?.id}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.atendente) {
    return { notFound: true }
  }

  const { atendente } = data

  return {
    revalidate: 60,
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
