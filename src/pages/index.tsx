import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import Home from 'templates/Home'
import protectedRoutes from 'utils/protected-routes'

export default function Index() {
  const [session, loadingSession] = useSession()
  const router = useRouter()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return <Home />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      session
    }
  }
}
