import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import io from 'socket.io-client'
import { SessionProps } from 'pages/api/auth/[...nextauth]'

export type SelectTurmaPayload = {
  id: string
  title: string
  code?: string
}

type UserProps = {
  userId: string
  username: string
  avatar: string
  turmaId: string
}
export type MessageResult = {
  username: string
  email: string
  avatar: string
  userId: string
  turmaId: string
  text: string
}

export type ForumContextData = {
  selectTurma: (data: SelectTurmaPayload) => void
  turmaSelected: SelectTurmaPayload
  messages: MessageResult[]
  sendMessage: (text: string) => void
  msg: string
  // usersOnline: UserProps[]
}

export const ForumContextDefaultValues = {
  selectTurma: () => null,
  messages: [],
  msg: '',
  sendMessage: () => null,
  // usersOnline: [],
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
  // const [usersOnline, setUsersOnline] = useState([] as UserProps[])
  const [messages, setMessages] = useState([] as MessageResult[])
  const [msg, setMsg] = useState('')

  useEffect(() => {
    registerSocket()
  }, [turmaSelected, msg])

  const selectTurma = (data: SelectTurmaPayload) => {
    setTurmaSelected(data)
    registerSocket(data.id)
    // console.log('SOCKET', socket.connected)
  }

  const registerSocket = (turmaId?: string) => {
    const socket = io('https://forum-nafau.herokuapp.com')

    socket.emit('joinRoom', {
      username: (session as SessionProps)?.user.name,
      email: (session as SessionProps)?.user.email,
      avatar: (session as SessionProps)?.user.avatar || '',
      userId: (session as SessionProps)?.id,
      turmaId: turmaId || ''
    })

    socket.on('message', (message: any) => {
      setMessages((oldState) => [...oldState, message])
    })

    socket.emit('chatMessage', {
      msg: msg,
      userId: (session as SessionProps)?.id
    })

    // socket.on('roomUsers', (users: UserProps[]) => {
    //   console.log('USUARIOS ON', users)
    //   // setUsersOnline([...users])
    // })
  }

  const sendMessage = (text: string) => {
    setMsg(text)
  }

  return (
    <ForumContext.Provider
      value={{
        turmaSelected,
        selectTurma,
        messages,
        msg: msg,
        sendMessage
        // usersOnline
      }}
    >
      {children}
    </ForumContext.Provider>
  )
}

const useForum = () => useContext(ForumContext)

export { ForumProvider, useForum }
