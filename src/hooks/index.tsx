import React from 'react'

import { StudentProvider } from './use-student'
import { TeacherProvider } from './use-teacher'
import { AtendenteProvider } from './use-atendente'
import { CourseProvider } from './use-turma'

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>
    <TeacherProvider>
      <AtendenteProvider>
        <CourseProvider>{children}</CourseProvider>
      </AtendenteProvider>
    </TeacherProvider>
  </StudentProvider>
)

export default AppProvider
