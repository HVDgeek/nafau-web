import React from 'react'

import { StudentProvider } from './use-student'
import { TeacherProvider } from './use-teacher'

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>
    <TeacherProvider>{children}</TeacherProvider>
  </StudentProvider>
)

export default AppProvider
