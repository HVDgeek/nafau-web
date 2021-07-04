import NextLink from 'next/link'
import {
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  UseDisclosureReturn,
  VStack
} from '@chakra-ui/react'
import Link from 'components/Link'

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
              <DrawerBody>
                <VStack height="100%" justifyContent="center" spacing={4}>
                  <NextLink href="/" passHref>
                    <a>
                      <Link>Início</Link>
                    </a>
                  </NextLink>
                  <Link>Gestão</Link>
                  <Link>Salas de aula</Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  )
}

export default SideMenu
