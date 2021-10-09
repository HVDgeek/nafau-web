import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'
import { initializeApollo } from 'utils/apollo'
import {
  QUERY_PROFESSORES,
  QUERY_PROFESSOR_BY_ID
} from 'graphql/queries/professores'
import {
  QueryProfessores,
  QueryProfessoresVariables
} from 'graphql/generated/QueryProfessores'
import {
  QueryProfessorById,
  QueryProfessorByIdVariables
} from 'graphql/generated/QueryProfessorById'

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
    QueryProfessores,
    QueryProfessoresVariables
  >({
    query: QUERY_PROFESSORES,
    variables: { limit: 9 }
  })

  const paths = data.professores.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    revalidate: 60,
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
