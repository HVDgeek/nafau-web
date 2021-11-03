import { Container, Flex } from '@chakra-ui/react'
import Empty from 'components/Empty'

export default function PrivatePage() {
  return (
    <Flex
      as="section"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Container>
        <Empty
          title="🔒 Você não tem permissão para acessar esta página!"
          description="Ops.... esta página é privada"
          hasLink
        />
      </Container>
    </Flex>
  )
}
