import { Container, Center, Flex } from '@chakra-ui/react'
import Empty from 'components/Empty'

export default function Page404() {
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
          title="404: Página Não encontrada!"
          description="Ops.... esta página não existe"
          hasLink
        />
      </Container>
    </Flex>
  )
}
