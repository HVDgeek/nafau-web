import NextLink from 'next/link'
import {
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  UseDisclosureReturn,
  VStack,
  Box
} from '@chakra-ui/react'
import Link from 'components/Link'
import { useRouter } from 'next/router'

const SideMenu = ({ onClose, isOpen }: UseDisclosureReturn) => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const { asPath } = useRouter()

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
                    <Box>
                      <Link isActive={asPath === '/'}>Início</Link>
                    </Box>
                  </NextLink>
                  <NextLink href="/manager/students" passHref>
                    <Box>
                      <Link isActive={asPath.includes('/manager')}>Gestão</Link>
                    </Box>
                  </NextLink>
                  <NextLink href="/classrooms/my-courses" passHref>
                    <Box>
                      <Link isActive={asPath.includes('/classrooms')}>
                        Salas de aula
                      </Link>
                    </Box>
                  </NextLink>
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
