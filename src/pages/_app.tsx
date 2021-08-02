import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloClient)

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>NAFAU</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A melhor Plataforma de Ensino e Aprendizagem 🚀"
          />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
