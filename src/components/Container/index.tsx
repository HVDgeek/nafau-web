import { Box } from '@chakra-ui/react'
import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box w="100%" maxW="1300px" mr="auto" ml="auto" pl={4} pr={4}>
      {children}
    </Box>
  )
}
