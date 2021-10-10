import { GetServerSidePropsContext } from 'next'
import Home from 'templates/Home'
import protectedRoutes from 'utils/protected-routes'

export default function Index() {
  return <Home />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session
    }
  }
}
