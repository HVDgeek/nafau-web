import { useRouter } from 'next/router'
import classroomsMock from 'components/ClassCard/mock'

import { useSession } from 'next-auth/client'
import YourUsersTemplate, { YourUsersTemplateProps } from 'templates/YourUsers'

export default function StudentClass(props: YourUsersTemplateProps) {
  const router = useRouter()

  const [session, loadingSession] = useSession()

  if (typeof window !== undefined && loadingSession) return null

  if (!session) {
    window.location.href = `/sign-in?callbackUrl=${router.asPath}`
  }

  return (
    <YourUsersTemplate {...props} title="Professores" withRegister={true} />
  )
}

export async function getServerSideProps() {
  return {
    props: {
      courses: classroomsMock
    }
  }
}
