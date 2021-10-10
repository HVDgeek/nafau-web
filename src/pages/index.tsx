import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Home from 'templates/Home'

export default function Index() {
  const { asPath } = useRouter()
  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${asPath}`
  }
  return <Home />
}
