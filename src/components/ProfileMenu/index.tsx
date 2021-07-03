import NextLink from 'next/link'
import { Text, Flex, useBreakpointValue } from '@chakra-ui/react'
import { VscAccount } from 'react-icons/vsc'
import { IoIosLogOut } from 'react-icons/io'
import { IoSchoolOutline } from 'react-icons/io5'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/courses'
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
        justifyContent={['center', 'flex-start']}
        as="a"
        transition="ease-in 0.2s"
        _hover={{
          background: 'purple.500'
        }}
      >
        {icon}
        <Text
          display={['none', 'inline']}
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

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const border = useBreakpointValue({
    md: 0
  })

  return (
    <Flex border={border} flexDir={['row', 'column']} as="nav">
      <Link
        isActive={activeLink === '/profile/me'}
        title="Meu perfil"
        href="/profile/me"
        icon={<VscAccount size={18} />}
      />
      <Link
        isActive={activeLink === '/profile/courses'}
        title="Minhas turmas"
        href="/profile/courses"
        icon={<IoSchoolOutline size={18} />}
      />
      <Link title="Sair" href="/logout" icon={<IoIosLogOut size={18} />} />
    </Flex>
  )
}

export default ProfileMenu
