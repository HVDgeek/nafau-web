import { Text, Box, Grid, VStack } from '@chakra-ui/react'
import Heading from 'components/Heading'
import themes from 'styles/alt-themes'
import Logo from 'components/Logo'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" height="100vh">
      <Box
        position="relative"
        backgroundImage="url(/img/auth-bg.jpg)"
        backgroundSize="cover"
        // backgroundPosition="right left"
        padding={8}
        _after={{
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#181b23',
          opacity: 0.9
        }}
      >
        <Grid
          templateColumns="1fr"
          justifyContent="space-between"
          height="100%"
          position="relative"
          zIndex={themes.layers.base}
        >
          <Logo hideOnMobile />
          <Box>
            <Heading>Aprendizagem de qualquer lugar!</Heading>
            <Text fontWeight="light" mt={2} as="h3">
              Gerencie o ensino e a aprendizagem de forma completa e otimizada
            </Text>
          </Box>
          <Text alignSelf="end" fontSize="x-small" textAlign="center" as="span">
            NAFAU 2021 © Todos os Direitos Reservados
          </Text>
        </Grid>
      </Box>
      <Grid
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.800"
      >
        <Box w="300px">
          <Box mb={10}>
            <Logo size="large" />
          </Box>
          <Box mb={5}>
            <Heading lineLeft>{title}</Heading>
          </Box>
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Auth
