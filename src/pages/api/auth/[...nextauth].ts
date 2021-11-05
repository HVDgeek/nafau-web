import NextAuth, { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

type AuthorizeProps = {
  email: string
  password: string
}

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }: AuthorizeProps) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (session: any, user: any) => {
      session.jwt = user.jwt
      session.id = user.id
      session.user = {
        ...user,
        institution: user.institution.id,
        profile: {
          id: user.profile.id,
          name: user.profile.name,
          canManageAluno: {
            isActive: user.profile['canManageAluno'].isActive
          },
          canSeeOtherUsers: {
            isActive: user.profile['canSeeOtherUsers'].isActive
          },
          canManageUsers: {
            isActive: user.profile['canManageUsers'].isActive
          },
          canManageRoles: {
            isActive: user.profile['canManageRoles'].isActive
          },
          canManageAtendente: {
            isActive: user.profile['canManageAtendente'].isActive
          },
          canManageGerente: {
            isActive: user.profile['canManageGerente'].isActive
          },
          canManageTeacher: {
            isActive: user.profile['canManageTeacher'].isActive
          },
          canManageTurma: {
            isActive: user.profile['canManageTurma'].isActive
          },
          canSeeTurmas: {
            isActive: user.profile['canSeeTurmas'].isActive
          },
          canSeeAulas: {
            isActive: user.profile['canSeeAulas'].isActive
          },
          canManageAula: {
            isActive: user.profile['canManageAula'].isActive
          }
        },
        avatar: user?.avatar?.url || ''
      }

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
        token = {
          ...token,
          institution: user.institution,
          profile: user.profile,
          avatar: user.avatar
        }
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

type CanProfileProps = {
  isActive: boolean
}

export type SessionProps = {
  id: string
  user: {
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
    institution: string
    profile: {
      canManageAluno: CanProfileProps
      canManageAtendente: CanProfileProps
      canManageAula: CanProfileProps
      canManageGerente: CanProfileProps
      canManageRoles: CanProfileProps
      canManageTeacher: CanProfileProps
      canManageTurma: CanProfileProps
      canManageUsers: CanProfileProps
      canSeeAulas: CanProfileProps
      canSeeOtherUsers: CanProfileProps
      canSeeTurmas: CanProfileProps

      id: string
      name: string
    }
    avatar: string
  }
}

export default Auth
