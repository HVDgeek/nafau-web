import {
  Flex,
  useBreakpointValue,
  HStack,
  useDisclosure
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiMenu2Fill } from 'react-icons/ri'
import Logo from 'components/Logo'
import IconButton from 'components/IconButton'
import ProfileHeader from 'components/ProfileHeader'
import SideMenu from 'components/SideMenu'

export type MenuProps = {
  children: React.ReactNode
}

const Menu = ({ children }: MenuProps) => {
  const disclosure = useDisclosure()

  const { onOpen } = disclosure

  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const iconSize = useBreakpointValue({
    base: 16,
    md: 18
  })

  return (
    <Flex as="nav" align="center" py={2} px={0} justify="space-between">
      {!isDesktopVersion && (
        <IconButton onClick={onOpen} ariaLabel="Menu navigation">
          <RiMenu2Fill size={iconSize} />
        </IconButton>
      )}
      <IconButton ariaLabel="logo">
        <Logo />
      </IconButton>
      <HStack>
        <IconButton ariaLabel="Search on platform">
          <AiOutlineSearch size={iconSize} />
        </IconButton>
        <IconButton ariaLabel="Notifications">
          <IoMdNotificationsOutline size={iconSize} />
        </IconButton>
        <ProfileHeader showProfileData={isDesktopVersion} />
      </HStack>
      {!isDesktopVersion && <SideMenu {...disclosure} />}
    </Flex>
  )
}

export default Menu
