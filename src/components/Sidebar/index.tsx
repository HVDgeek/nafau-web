import { Box, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from 'contexts/SidebarDrawer'

export type SidebarProps = {
  children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Box as="aside" w="64" mr="8">
      {/* <SidebarNav/> */}
    </Box>
  )
}

export default Sidebar
