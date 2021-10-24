import { Box, Flex } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const [session] = useSession()

  useEffect(() => {
    localStorage.setItem('@nafau-session', JSON.stringify(session))
  }, [session])

  return (
    <Flex
      as="section"
      flexDir="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Container>
        <Menu username={session?.user?.name} />
      </Container>
      <Box mt={4} flex="1 0 auto">
        {children}
      </Box>
      <Container>
        <Box
          mb={4}
          mt={8}
          display="flex"
          alignSelf="end"
          justifyContent="center"
        >
          <Footer />
        </Box>
      </Container>
    </Flex>
  )
}

export default Base
