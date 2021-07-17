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

export type CourseTemplateProps = {
  courses: ClassCardProps[]
  onSubmit: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  title: string
  withRegister: boolean
  links: LinkProps[]
}

const Course = ({
  courses = [],
  onSubmit,
  title = 'Minhas turmas',
  withRegister = false,
  links
}: CourseTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Main>
          <Sidebar links={links} activeLink={asPath} />
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
            <CoursesList courses={courses} />
            <ShowMore
              onClick={() => {
                console.log('SHow more')
              }}
            />
          </ScaleFade>
        </Main>
      </Container>
    </Base>
  )
}

export default Course
