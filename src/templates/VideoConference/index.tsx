import { useRouter } from 'next/router'
import { Flex, ScaleFade } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import Sidebar from 'components/Sidebar'
import { Main } from 'templates/Users'
import { LinkProps } from 'components/Sidebar'

import { Jutsu } from 'components/Jitsi'

export type RoomProps = {
  title: string
  username: string
  password: string
}

export type VideoConferenceTemplateProps = {
  room: RoomProps
  links: LinkProps[]
}

const VideoConferenceTemplate = ({
  room,
  links
}: VideoConferenceTemplateProps) => {
  const { asPath, back } = useRouter()

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={links} activeLink={asPath} />
          {/* {loading ? (
            <LoadingClient title={room.title} /> */}

          <ScaleFade initialScale={0.9} in={true}>
            <Flex justifyContent="space-between" ml={4}>
              <Heading lineLeft color={themes.colors.lightGray}>
                {room.title}
              </Heading>
            </Flex>
            <div>
              <div
                style={{
                  marginTop: '20px',
                  height: '75vh',
                  backgroundColor: '#1F2029'
                }}
              >
                <Jutsu
                  roomName={room.title}
                  // password={room.password}
                  displayName={room.username}
                  onMeetingEnd={() => {
                    back()
                  }}
                  loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>}
                />
              </div>
            </div>
          </ScaleFade>
        </Main>
      </Container>
    </Base>
  )
}

export default VideoConferenceTemplate
