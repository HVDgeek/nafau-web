import React from 'react'

import { StudentProvider } from './use-student'
import { TeacherProvider } from './use-teacher'
import { AtendenteProvider } from './use-atendente'
import { CourseProvider } from './use-turma'
import { SubscriptionProvider } from './use-subscription'

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>
    <TeacherProvider>
      <AtendenteProvider>
        <CourseProvider>
          <SubscriptionProvider>{children}</SubscriptionProvider>
        </CourseProvider>
      </AtendenteProvider>
    </TeacherProvider>
  </StudentProvider>
)

export default AppProvider
