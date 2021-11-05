import React, { createContext, useContext, useState } from 'react'
import { useSession } from 'next-auth/client'

import { SessionProps } from 'pages/api/auth/[...nextauth]'

export type SelectTurmaPayload = {
  id: string
  title: string
  code?: string
}

export type ForumContextData = {
  selectTurma: (data: SelectTurmaPayload) => void
  turmaSelected: SelectTurmaPayload
}

export const ForumContextDefaultValues = {
  selectTurma: () => null,
  turmaSelected: {
    id: '',
    title: '',
    code: ''
  }
}

export type ForumProviderProps = {
  children: React.ReactNode
}

export const ForumContext = createContext<ForumContextData>(
  ForumContextDefaultValues
)

const ForumProvider = ({ children }: ForumProviderProps) => {
  const [session] = useSession()
  const [turmaSelected, setTurmaSelected] = useState({} as SelectTurmaPayload)

  const selectTurma = (data: SelectTurmaPayload) => {
    setTurmaSelected(data)
  }

  return (
    <ForumContext.Provider
      value={{
        turmaSelected,
        selectTurma
      }}
    >
      {children}
    </ForumContext.Provider>
  )
}

const useForum = () => useContext(ForumContext)

export { ForumProvider, useForum }
