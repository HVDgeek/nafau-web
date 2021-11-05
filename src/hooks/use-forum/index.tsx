import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import io from 'socket.io-client'
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

  useEffect(() => {
    registerSocket()
  }, [])

  const selectTurma = (data: SelectTurmaPayload) => {
    // setTurmaSelected(data)
    // console.log('SOCKET', socket.connected)
  }

  const registerSocket = () => {
    const socket = io('http://localhost:3333')

    socket.on('message', (message) => {
      console.log(message)
      socket.emit('join', 'Hiduino Domingos..')
    })
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
