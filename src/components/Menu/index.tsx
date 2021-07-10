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
import ProfileHeader from './ProfileHeader'
import SideMenu from './SideMenu'
import Link from 'components/Link'

export type MenuProps = {
  children: React.ReactNode
}

const Menu = () => {
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
        {!isDesktopVersion && (
          <IconButton onClick={onOpen} ariaLabel="Menu navigation">
            <RiMenu2Fill size={iconSize} />
          </IconButton>
        )}
        <IconButton ariaLabel="logo">
          <NextLink href="/" passHref>
            <a>
              <Logo />
            </a>
          </NextLink>
        </IconButton>
        {isDesktopVersion && (
          <HStack spacing={8}>
            <NextLink href="/" passHref>
              <Box>
                <Link isActive={asPath === '/'}>Início</Link>
              </Box>
            </NextLink>
            <Link isActive={asPath.includes('/manager')}>Gestão</Link>
            <Link isActive={asPath.includes('/classrooms')}>Salas de aula</Link>
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
        <ProfileHeader />
      </HStack>
      {!isDesktopVersion && <SideMenu {...disclosure} />}
    </Flex>
  )
}

export default Menu
