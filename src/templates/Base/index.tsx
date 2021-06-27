import { Container } from 'components/Container'
import Menu from 'components/Menu'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
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
