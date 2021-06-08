import {
  Box,
  useBreakpointValue,
  Stack,
  Text,
  Icon,
  Flex,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'components/Link'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export type SidebarProps = {
  children: React.ReactNode
}

const Sidebar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Box as="aside" w="64" mr="8">
      <h1>Teste teste...</h1>
    </Box>
  )
}

export default Sidebar
