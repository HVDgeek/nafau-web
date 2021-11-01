import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Flex,
  Box,
  useBreakpointValue,
  HStack,
  useDisclosure
} from '@chakra-ui/react'
// import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiMenu2Fill } from 'react-icons/ri'
import Logo from 'components/Logo'
import IconButton from 'components/IconButton'
import SideMenu from './SideMenu'
import Link from 'components/Link'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  username?: string | null
  avatar?: string
}

const Menu = ({ username, avatar }: MenuProps) => {
  const disclosure = useDisclosure()
  const { asPath } = useRouter()

  const { onOpen } = disclosure

  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const iconSize = useBreakpointValue({
    base: 18,
    md: 24
  })

  return (
    <Flex as="nav" align="center" py={2} px={0} justify="space-between">
      <HStack spacing={[4, 8]} alignItems="center">
        {!isDesktopVersion && isDesktopVersion !== undefined && (
          <IconButton onClick={onOpen} ariaLabel="Menu navigation">
            <RiMenu2Fill size={iconSize} />
          </IconButton>
        )}
        <IconButton ariaLabel="logo">
          <NextLink href="/">
            <a>
              <Logo />
            </a>
          </NextLink>
        </IconButton>
        {isDesktopVersion && (
          <HStack spacing={8}>
            <NextLink href="/">
              <a>
                <Link isActive={asPath === '/'}>Início</Link>
              </a>
            </NextLink>
            <NextLink href="/manager/students">
              <a>
                <Link isActive={asPath.includes('/manager')}>Gestão</Link>
              </a>
            </NextLink>
            <NextLink href="/classrooms/my-courses">
              <a>
                <Link isActive={asPath.includes('/classrooms')}>
                  Salas de aula
                </Link>
              </a>
            </NextLink>
          </HStack>
        )}

        {isDesktopVersion === undefined && (
          <HStack spacing={8}>
            <NextLink href="/">
              <a>
                <Link isActive={asPath === '/'}>Início</Link>
              </a>
            </NextLink>
            <NextLink href="/manager/students">
              <a>
                <Link isActive={asPath.includes('/manager')}>Gestão</Link>
              </a>
            </NextLink>
            <NextLink href="/classrooms/my-courses">
              <a>
                <Link isActive={asPath.includes('/classrooms')}>
                  Salas de aula
                </Link>
              </a>
            </NextLink>
          </HStack>
        )}
      </HStack>
      <HStack>
        <IconButton ariaLabel="Notifications">
          <Box position="relative" mr={4}>
            <IoMdNotificationsOutline size={iconSize} />
            <Box
              fontSize="10px"
              position="absolute"
              right={5}
              bottom="50%"
              backgroundColor="pink.500"
              p="1px 5px"
              borderRadius="full"
              transform="translateX(10px)"
            >
              8
            </Box>
          </Box>
        </IconButton>
        <UserDropdown
          username={username?.split('*#nafau#*')[0] || username}
          avatar={avatar}
        />
      </HStack>
      {!isDesktopVersion && isDesktopVersion !== undefined && (
        <SideMenu {...disclosure} />
      )}
    </Flex>
  )
}

export default Menu
