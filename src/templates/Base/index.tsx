import { Container } from 'components/Container'
import Menu from 'components/Menu'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>
      {children}
    </section>
  )
}

export default Base
