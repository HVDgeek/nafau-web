import React from 'react'

import { StudentProvider } from './use-student'
import { TeacherProvider } from './use-teacher'
import { AtendenteProvider } from './use-atendente'

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>
    <TeacherProvider>
      <AtendenteProvider>{children}</AtendenteProvider>
    </TeacherProvider>
  </StudentProvider>
)

export default AppProvider
