export type User = {
  id: string
}

export type UserState = {
  selectUsers: User[]
}

export const initialState: UserState = {
  selectUsers: []
}

type UserAction =
  | { type: 'AddUser'; payload: User }
  | { type: 'DeleteUser'; payload: { id: string } }
  | { type: 'DeleteAllUsers' }

export const usersReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'AddUser':
      return {
        ...state,
        selectUsers: [
          ...state.selectUsers,
          {
            id: action.payload.id
          }
        ]
      }
    case 'DeleteAllUsers':
      return {
        ...state,
        selectUsers: []
      }
    case 'DeleteUser':
      return {
        ...state,
        selectUsers: state.selectUsers.filter(
          (user) => user.id !== action.payload.id
        )
      }
    default:
      return state
  }
}
