import { Text, Box } from '@chakra-ui/react'
import themes from 'styles/alt-themes'

export type SidebarChatProps = {
  children: React.ReactNode
}

const SidebarChat = ({ children }: SidebarChatProps) => {
  return (
    <Box
      borderTopLeftRadius={themes.border.radius}
      borderBottomLeftRadius={themes.border.radius}
      borderRight="2px solid #181b23"
      w="260px"
      overflowY="scroll"
      bgColor="gray.800"
      height="100%"
      css={{
        '&::-webkit-scrollbar': {
          width: '5px'
        },
        '&::-webkit-scrollbar-track': {
          width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#805AD5',
          borderRadius: '24px'
        }
      }}
    >
      {children}
    </Box>
  )
}

export default SidebarChat
