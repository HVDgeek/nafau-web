import { useRouter } from 'next/router'
import { Flex, ScaleFade } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
import themes from 'styles/alt-themes'
import { ClassCardProps } from 'components/ClassCard'
import Sidebar from 'components/Sidebar'
import { Main } from 'templates/Users'
import { LinkProps } from 'components/Sidebar'
import LoadingClient from 'components/LoadingClient'

export type ForumTemplateProps = {
  route?: string
  courses: ClassCardProps[]
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
  links
}: ForumTemplateProps) => {
  const { asPath, push } = useRouter()

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
              {/**/}
            </ScaleFade>
          )}
        </Main>
      </Container>
    </Base>
  )
}

export default ForumTemplate
