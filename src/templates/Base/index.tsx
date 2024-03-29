import { Box, Flex } from '@chakra-ui/react'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useSession } from 'next-auth/client'
import { SessionProps } from 'pages/api/auth/[...nextauth]'
import { getImageUrl } from 'utils/getImageUrl'

export type BaseTemplateProps = {
  children: React.ReactNode
  withOutFooter?: boolean
}

const Base = ({ children, withOutFooter = false }: BaseTemplateProps) => {
  const [session] = useSession()

  return (
    <Flex
      as="section"
      flexDir="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Container>
        <Menu
          username={session?.user?.name}
          avatar={`${getImageUrl((session as SessionProps)?.user?.avatar)}`}
        />
      </Container>
      <Box mt={4} flex="1 0 auto">
        {children}
      </Box>
      {!withOutFooter && (
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
      )}
    </Flex>
  )
}

export default Base
