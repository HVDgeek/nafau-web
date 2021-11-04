import { Text, Box } from '@chakra-ui/react'
import themes from 'styles/alt-themes'

export type ParticipantsProps = {
  children: React.ReactNode
}

const Participants = ({ children }: ParticipantsProps) => {
  return (
    <Box
      borderTopRightRadius={themes.border.radius}
      borderBottomRightRadius={themes.border.radius}
      borderLeft="2px solid #181b23"
      w="200px"
      bgColor="gray.800"
      height="100%"
      overflowY="scroll"
      p={2}
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
      <Text>{children}</Text>
    </Box>
  )
}

export default Participants
