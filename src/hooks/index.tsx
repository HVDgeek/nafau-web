import React from 'react'

import { StudentProvider } from './use-student'
import { TeacherProvider } from './use-teacher'
import { AtendenteProvider } from './use-atendente'
import { CourseProvider } from './use-turma'
import { SubscriptionProvider } from './use-subscription'
import { UserProvider } from './use-user'
import { ForumProvider } from './use-forum'
import { AulaProvider } from './use-aula'

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>
    <TeacherProvider>
      <AtendenteProvider>
        <CourseProvider>
          <SubscriptionProvider>
            <UserProvider>
              <ForumProvider>
                <AulaProvider>{children}</AulaProvider>
              </ForumProvider>
            </UserProvider>
          </SubscriptionProvider>
        </CourseProvider>
      </AtendenteProvider>
    </TeacherProvider>
  </StudentProvider>
)

export default AppProvider
