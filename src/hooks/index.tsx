import React from 'react'

import { StudentProvider } from './use-student'

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>{children}</StudentProvider>
)

export default AppProvider
