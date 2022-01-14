import { Container, Flex, Box, Text, Spinner } from '@chakra-ui/react'
import Heading from 'components/Heading'

import themes from 'styles/alt-themes'

export default function CheckingProfile() {
  return (
    <Flex
      as="section"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Flex align="center">
        <Heading>Verificando o perfil do usuário...</Heading>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={themes.colors.secondary}
          size="xl"
          ml={4}
        />
      </Flex>
    </Flex>
  )
}
