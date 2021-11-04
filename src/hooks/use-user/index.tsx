import React, { createContext, useContext } from 'react'
import { useSession } from 'next-auth/client'
import { useQueryUserById } from 'graphql/queries/user'

import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { QueryUserById_user_teacher_turmas } from 'graphql/generated/QueryUserById'

export type UserPayload = {
  id: string
}

export type TurmasResult = Omit<QueryUserById_user_teacher_turmas, '__typename'>

export type UserContextData = {
  getTurmas: () => TurmasResult[]
  loading: boolean
}

export const UserContextDefaultValues = {
  getTurmas: () => [],
  loading: false
}

export type UserProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextData>(
  UserContextDefaultValues
)

const UserProvider = ({ children }: UserProviderProps) => {
  const [session] = useSession()

  const { data, loading } = useQueryUserById({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      id: (session as SessionProps)?.id
    }
  })

  const getTurmas = () => {
    if (data && data.user?.teacher) {
      return data.user.teacher.turmas
    }

    if (data && data.user?.aluno) {
      return data.user.aluno.turmas
    }
    return []
  }

  return (
    <UserContext.Provider
      value={{
        getTurmas,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
