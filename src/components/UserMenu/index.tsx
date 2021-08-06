import NextLink from 'next/link'
import { Text, Flex, useBreakpointValue } from '@chakra-ui/react'
import { VscAccount } from 'react-icons/vsc'
import { IoSchoolOutline } from 'react-icons/io5'

export type UserMenuProps = {
  activeLink?: '/profile/me' | '/profile/courses' | string
}

type LinkProps = {
  title: string
  href: string
  icon: JSX.Element | React.ReactNode
  isActive?: boolean
}

const Link = ({ title, href, icon, isActive }: LinkProps) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <NextLink href={href} passHref>
      <Flex
        flex={isMobile ? 1 : 0}
        backgroundColor={isActive ? 'purple.500' : 'gray.800'}
        padding={2}
        alignItems="center"
        justifyContent={['center', 'center', 'flex-start']}
        as="a"
        transition="ease-in 0.2s"
        _hover={{
          background: 'purple.500'
        }}
      >
        {icon}
        <Text
          display={['none', 'none', 'inline']}
          fontSize="small"
          marginLeft={2}
          as="span"
        >
          {title}
        </Text>
      </Flex>
    </NextLink>
  )
}

const UserMenu = ({ activeLink }: UserMenuProps) => {
  const border = useBreakpointValue({
    md: 0
  })

  return (
    <Flex border={border} flexDir={['row', 'row', 'column']} as="nav">
      <Link
        isActive={
          activeLink?.includes('student') &&
          !activeLink?.includes('your-courses')
        }
        title="Dados do usuário"
        href="/manager/student/5"
        icon={<VscAccount size={18} />}
      />
      <Link
        isActive={activeLink?.includes('your-courses')}
        title="Turmas"
        href="/manager/student/5/your-courses"
        icon={<IoSchoolOutline size={18} />}
      />
    </Flex>
  )
}

export default UserMenu
