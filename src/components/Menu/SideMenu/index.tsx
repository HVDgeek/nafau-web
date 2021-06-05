import {
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  UseDisclosureReturn
} from '@chakra-ui/react'

const SideMenu = ({ onClose, isOpen }: UseDisclosureReturn) => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <>
      {isDrawerSidebar && (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" _focus={{ shadow: 'none' }} />

              <DrawerHeader>Navegação</DrawerHeader>

              <DrawerBody>
                {/* <SidebarNav /> */}
                <Text>SideNAV</Text>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  )
}

export default SideMenu
