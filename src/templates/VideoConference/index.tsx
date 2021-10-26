import { useRouter } from 'next/router'
import { Flex, Icon, ScaleFade, Input } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import { ClassCardProps } from 'components/ClassCard'
import CoursesList from 'components/CoursesList'
import { FaPlus } from 'react-icons/fa'
import Sidebar from 'components/Sidebar'
import { Main } from 'templates/Users'
import ShowMore from 'components/ShowMore'
import { LinkProps } from 'components/Sidebar'
import LoadingClient from 'components/LoadingClient'
import { useState } from 'react'

import { Jutsu } from 'components/Jitsi'

export type VideoConferenceTemplateProps = {
  route?: string
  courses: ClassCardProps[]
  loading: boolean
  hasMore: boolean
  handleShowMore: () => void
  title: string
  withRegister: boolean
  links: LinkProps[]
  titleSemTurma?: string
  descriptionSemTurma?: string
}

const VideoConferenceTemplate = ({
  route,
  courses = [],
  loading,
  hasMore,
  handleShowMore,
  title = 'Minhas turmas',
  links,
  titleSemTurma = 'Você ainda não tem turmas!',
  descriptionSemTurma = 'Você precisa estar inscrito em alguma turma para que apareça aqui. Abraços 😃'
}: VideoConferenceTemplateProps) => {
  const { asPath, push } = useRouter()

  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={links} activeLink={asPath} />
          {loading ? (
            <LoadingClient title={title} />
          ) : (
            <ScaleFade initialScale={0.9} in={true}>
              <Flex justifyContent="space-between" ml={4}>
                <Heading lineLeft color={themes.colors.lightGray}>
                  {title}
                </Heading>
              </Flex>
              {/* <CoursesList
                route={route}
                titleSemTurma={titleSemTurma}
                descriptionSemTurma={descriptionSemTurma}
                courses={courses}
              />
              {hasMore && (
                <ShowMore
                  tooltipText="Carregar mais Turmas!"
                  onClick={handleShowMore}
                />
              )} */}
              <div>
                {call ? (
                  <Jutsu
                    roomName={room}
                    password={password}
                    displayName={name}
                    onMeetingEnd={() => window.location.reload()}
                    loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>}
                  />
                ) : (
                  <form>
                    <Input
                      id="room"
                      type="text"
                      placeholder="Room"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                    />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      id="password"
                      type="text"
                      placeholder="Password (optional)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} type="submit">
                      Start / Join
                    </Button>
                  </form>
                )}
              </div>
            </ScaleFade>
          )}
        </Main>
      </Container>
    </Base>
  )
}

export default VideoConferenceTemplate
