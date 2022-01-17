import React, { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

export type AulaPayload = {
  id: string
}

export type AulaContextData = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const AulaContextDefaultValues = {
  isOpen: false,
  onOpen: () => null,
  onClose: () => null
}

export type AulaProviderProps = {
  children: React.ReactNode
}

export const AulaContext = createContext<AulaContextData>(
  AulaContextDefaultValues
)

const AulaProvider = ({ children }: AulaProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <AulaContext.Provider
      value={{
        isOpen,
        onClose,
        onOpen
      }}
    >
      {children}
    </AulaContext.Provider>
  )
}

const useAula = () => useContext(AulaContext)

export { AulaProvider, useAula }
