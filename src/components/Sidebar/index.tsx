/* eslint-disable @typescript-eslint/no-explicit-any */
import NextLink from 'next/link'
import {
  Stack,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  UseDisclosureReturn,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import themes from 'styles/alt-themes'
import { BsFilterLeft } from 'react-icons/bs'
import IconButton from 'components/IconButton'

export type LinkProps = {
  route: string
  icon: any
  children: string
  isActive?: boolean
}

export type SidebarProps = {
  links: LinkProps[]
  activeLink?: string
}

type SidebarDrawerProps = {
  drawer: UseDisclosureReturn
  children: React.ReactNode
}

const SidebarLink = ({ route, children, icon, isActive }: LinkProps) => (
  <NextLink href={route} passHref>
    <Flex
      _hover={{
        cursor: 'pointer',
        color: themes.colors.primary
      }}
      as="a"
      color={isActive ? 'purple.500' : 'gray.100'}
      align="center"
      flexDirection="column"
      transition="color 0.3s"
    >
      <Icon as={icon} />
      <Text as="span" fontSize="xs" fontWeight={300}>
        {children}
      </Text>
    </Flex>
  </NextLink>
)

const SidebarDrawer = ({ drawer, children }: SidebarDrawerProps) => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <>
      {isDrawerSidebar && (
        <Drawer
          isOpen={drawer.isOpen}
          placement="left"
          onClose={drawer.onClose}
        >
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" _focus={{ shadow: 'none' }} />
              <DrawerBody>
                <VStack height="100%" justifyContent="center" spacing={4}>
                  {children}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  )
}

const Sidebar = ({ links, activeLink }: SidebarProps) => {
  const disclosure = useDisclosure()

  const { onOpen } = disclosure

  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      {!isDesktopVersion && (
        <IconButton onClick={onOpen} ariaLabel="Menu navigation">
          <BsFilterLeft size={20} />
        </IconButton>
      )}
      {isDesktopVersion && (
        <Stack spacing={3} as="aside" w="30" mr="8">
          {links?.map((link) => {
            return (
              <SidebarLink
                key={link.children}
                route={link.route}
                icon={link.icon}
                isActive={activeLink === link.route}
              >
                {link.children}
              </SidebarLink>
            )
          })}
        </Stack>
      )}
      {!isDesktopVersion && (
        <SidebarDrawer drawer={disclosure}>
          <Stack spacing={3} as="aside" w="30" mr="8">
            {links?.map((link) => {
              return (
                <SidebarLink
                  key={link.children}
                  route={link.route}
                  icon={link.icon}
                  isActive={activeLink === link.route}
                >
                  {link.children}
                </SidebarLink>
              )
            })}
          </Stack>
        </SidebarDrawer>
      )}
    </>
  )
}

export default Sidebar
