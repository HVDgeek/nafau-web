import { Container } from '@chakra-ui/react'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Container>
      <Empty
        title="404: Não encontrada!"
        description="Ops.... esta página não existe"
        hasLink
      />
    </Container>
  )
}
