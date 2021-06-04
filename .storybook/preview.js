import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#181b23',
      },
      {
        name: 'light',
        value: '#f2f2f2',
      },
    ],
  },
}

const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
