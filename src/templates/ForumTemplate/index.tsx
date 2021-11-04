import { useRouter } from 'next/router'
import { Flex, ScaleFade, Avatar, TagLabel, Tag, Text } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import { ClassCardProps } from 'components/ClassCard'
import Sidebar from 'components/Sidebar'
import { Main } from 'templates/Users'
import { LinkProps } from 'components/Sidebar'
import LoadingClient from 'components/LoadingClient'
import MainChat from 'components/MainChat'
import SidebarChat from 'components/SidebarChat'
import Participants from 'components/Participants'
import CourseItemChat from 'components/CourseItemChat'
import { UserCardProps } from 'components/UserCard'
import { stringToColour } from 'utils/stringToColor'
import { shade } from 'polished'

export type ForumTemplateProps = {
  route?: string
  courses: ClassCardProps[]
  users: Omit<UserCardProps, 'onRemove' | 'route'>[]
  loading: boolean
  handleShowMore: () => void
  title: string
  links: LinkProps[]
}

const ForumTemplate = ({
  route,
  courses = [],
  loading,
  title = 'Minhas turmas',
  links,
  users
}: ForumTemplateProps) => {
  const { asPath, push } = useRouter()

  return (
    <Base withOutFooter={true}>
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
              <Flex
                mt={4}
                height="80vh"
                bgColor="gray.800"
                borderRadius={themes.border.radius}
              >
                <SidebarChat>
                  <Text
                    alignSelf="center"
                    fontWeight="bold"
                    color="gray.300"
                    fontSize="small"
                    p={4}
                  >
                    Minhas turmas
                  </Text>
                  {courses.map((course) => (
                    <CourseItemChat
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      code={course?.code}
                    />
                  ))}
                </SidebarChat>
                <MainChat />
                <Participants>
                  <Text
                    alignSelf="center"
                    fontWeight="bold"
                    color="gray.300"
                    fontSize="small"
                  >
                    Participantes
                  </Text>
                  {users.map((user) => (
                    <Tag
                      key={user.id}
                      mt={2}
                      maxWidth={180}
                      size="md"
                      bg={shade(0.7, stringToColour(user.name))}
                      borderRadius="full"
                    >
                      <Avatar
                        src={user?.avatar}
                        size="2xs"
                        name={user.name}
                        ml={-1}
                        mr={2}
                      />
                      <TagLabel
                        isTruncated
                        color="white"
                        fontSize="x-small"
                        fontWeight="normal"
                      >
                        {user.name}
                      </TagLabel>
                    </Tag>
                  ))}
                </Participants>
              </Flex>
            </ScaleFade>
          )}
        </Main>
      </Container>
    </Base>
  )
}

export default ForumTemplate
