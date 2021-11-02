import React, { createContext, useContext, useReducer } from 'react'
import { User, UserState } from './users-reducer'
import { usersReducer, initialState } from './users-reducer'

export type SubscriptionContextData = {
  addUser: (item: User) => void
  deleteUser: (item: User) => void
  deleteAllUsers: () => void
  state: UserState
}

export const SubscriptionContextDefaultValues = {
  addUser: () => null,
  deleteUser: () => null,
  deleteAllUsers: () => null,
  state: {
    selectUsers: []
  }
}

export type SubscriptionProviderProps = {
  children: React.ReactNode
}

export const SubscriptionContext = createContext<SubscriptionContextData>(
  SubscriptionContextDefaultValues
)

const SubscriptionProvider = ({ children }: SubscriptionProviderProps) => {
  const [state, dispatch] = useReducer(usersReducer, initialState)

  const addUser = ({ id }: User) => {
    dispatch({
      type: 'AddUser',
      payload: { id }
    })
  }
  const deleteUser = ({ id }: User) => {
    dispatch({
      type: 'DeleteUser',
      payload: { id }
    })
  }
  const deleteAllUsers = () => {
    dispatch({
      type: 'DeleteAllUsers'
    })
  }

  return (
    <SubscriptionContext.Provider
      value={{
        state,
        addUser: addUser,
        deleteUser: deleteUser,
        deleteAllUsers: deleteAllUsers
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

const useSubscription = () => useContext(SubscriptionContext)

export { useSubscription, SubscriptionProvider }
