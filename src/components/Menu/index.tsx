import NextLink from 'next/link'
import {
  Flex,
  Box,
  useBreakpointValue,
  HStack,
  useDisclosure
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
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

  const { onOpen } = disclosure

  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const iconSize = useBreakpointValue({
    base: 18,
    md: 20
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
              <a>
                <Link>Início</Link>
              </a>
            </NextLink>
            <Link>Gestão</Link>
            <Link>Salas de aula</Link>
          </HStack>
        )}
      </HStack>
      <HStack>
        {/* <IconButton ariaLabel="Search on platform">
          <AiOutlineSearch size={iconSize} />
        </IconButton> */}
        <IconButton ariaLabel="Notifications">
          <Box position="relative" mr={4}>
            <IoMdNotificationsOutline size={iconSize} />
            <Box
              fontSize="xx-small"
              position="absolute"
              right={5}
              bottom="65%"
              backgroundColor="red.400"
              p="2px 6px"
              borderRadius="full"
              transform="translateX(8px)"
            >
              8
            </Box>
          </Box>
        </IconButton>
        <ProfileHeader showProfileData={isDesktopVersion} />
      </HStack>
      {!isDesktopVersion && <SideMenu {...disclosure} />}
    </Flex>
  )
}

export default Menu
