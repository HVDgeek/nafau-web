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

  return (
    <Flex border={border} flexDir={['row', 'row', 'column']} as="nav">
      <Link
        isActive={
          activeLink?.includes('course') &&
          (!activeLink?.includes('students') ||
            !activeLink?.includes('teachers'))
        }
        title="Dados da turma"
        href={activeLink!.replace('your-courses', '')}
        icon={<IoSchoolOutline size={18} />}
      />
      {!activeLink?.includes('create') && (
        <Link
          isActive={activeLink?.includes('students')}
          title="Alunos"
          href={
            activeLink?.includes('students')
              ? `${activeLink}`
              : `${activeLink}/students`
          }
          icon={<BsPersonSquare size={15} />}
        />
      )}
      {!activeLink?.includes('create') && (
        <Link
          isActive={activeLink?.includes('teachers')}
          title="Professores"
          href={
            activeLink?.includes('teachers')
              ? `${activeLink}`
              : `${activeLink}/teachers`
          }
          icon={<GiTeacher size={15} />}
        />
      )}
    </Flex>
  )
}

export default ClassMenu
