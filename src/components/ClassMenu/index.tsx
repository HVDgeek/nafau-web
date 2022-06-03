import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { IoSchoolOutline } from 'react-icons/io5'
import { BsPersonSquare } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { Link } from 'components/UserMenu'

export type ClassMenuProps = {
  activeLink: string
}

const ClassMenu = ({ activeLink }: ClassMenuProps) => {
  const border = useBreakpointValue({
    md: 0
  })

  function navigateUrlBase(url: string) {
    if (url.includes('teachers') && !url.includes('students')) {
      return url.replace('teachers', '')
    }
    if (url.includes('students') && !url.includes('teachers')) {
      return url.replace('students', '')
    }
    return url
  }

  function navigateUrlStudent(url: string) {
    if (url.includes('teachers') && !url.includes('students')) {
      return url.replace('teachers', 'students')
    }
    if (url.includes('students')) {
      return url
    }

    if (!url.includes('students') && !url.includes('teachers')) {
      return `${url}/students`
    }
    return url
  }

  function navigateUrlTeacher(url: string) {
    if (url.includes('students') && !url.includes('teachers')) {
      return url.replace('students', 'teachers')
    }
    if (url.includes('teachers')) {
      return url
    }

    if (!url.includes('students') && !url.includes('teachers')) {
      return `${url}/teachers`
    }
    return url
  }

  return (
    <Flex border={border} flexDir={['row', 'row', 'column']} as="nav">
      <Link
        isActive={
          !activeLink?.includes('students') && !activeLink?.includes('teachers')
        }
        title="Dados da turma"
        href={navigateUrlBase(activeLink)}
        icon={<IoSchoolOutline size={18} />}
      />
      {!activeLink?.includes('create') && (
        <Link
          isActive={
            activeLink?.includes('students') &&
            !activeLink?.includes('teachers')
          }
          title="Alunos"
          href={navigateUrlStudent(activeLink)}
          icon={<BsPersonSquare size={15} />}
        />
      )}
      {!activeLink?.includes('create') && (
        <Link
          isActive={activeLink?.includes('teachers')}
          title="Professores"
          href={navigateUrlTeacher(activeLink)}
          icon={<GiTeacher size={15} />}
        />
      )}
    </Flex>
  )
}

export default ClassMenu
