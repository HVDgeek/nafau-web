import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import UsersRegisterTemplate, {
  UsersRegisterTemplateProps
} from 'templates/UsersRegister'
import { initializeApollo } from 'utils/apollo'
import { QUERY_ALUNOS, QUERY_ALUNO_BY_ID } from 'graphql/queries/alunos'
import {
  QueryAlunos,
  QueryAlunosVariables
} from 'graphql/generated/QueryAlunos'
import {
  QueryAlunoById,
  QueryAlunoByIdVariables
} from 'graphql/generated/QueryAlunoById'

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
  const { data } = await apolloClient.query<QueryAlunos, QueryAlunosVariables>({
    query: QUERY_ALUNOS,
    variables: { limit: 9 }
  })

  const paths = data.alunos.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryAlunoById,
    QueryAlunoByIdVariables
  >({
    query: QUERY_ALUNO_BY_ID,
    variables: { id: `${params?.id}` }
  })

  if (!data.aluno) {
    return { notFound: true }
  }

  const { aluno } = data

  return {
    revalidate: 60,
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
