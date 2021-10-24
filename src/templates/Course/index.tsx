import { useRouter } from 'next/router'
import { Flex, Icon, ScaleFade } from '@chakra-ui/react'
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

export type CourseTemplateProps = {
  route?: string
  courses: ClassCardProps[]
  loading: boolean
  hasMore: boolean
  onSubmit: () => void
  handleShowMore: () => void
  title: string
  withRegister: boolean
  links: LinkProps[]
  titleSemTurma?: string
  descriptionSemTurma?: string
}

const Course = ({
  route,
  courses = [],
  loading,
  hasMore,
  onSubmit,
  handleShowMore,
  title = 'Minhas turmas',
  withRegister = false,
  links,
  titleSemTurma = 'Você ainda não tem turmas!',
  descriptionSemTurma = 'Você precisa estar inscrito em alguma turma para que apareça aqui. Abraços 😃'
}: CourseTemplateProps) => {
  const { asPath } = useRouter()

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
                {withRegister && (
                  <Button
                    onClick={onSubmit}
                    size="sm"
                    leftIcon={<Icon as={FaPlus} />}
                  >
                    Cadastrar
                  </Button>
                )}
              </Flex>
              <CoursesList
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
              )}
            </ScaleFade>
          )}
        </Main>
      </Container>
    </Base>
  )
}

export default Course
