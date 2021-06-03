import React from 'react'
import {
  Heading as ChakraHEading,
  HeadingProps as ChakraHeadingProps,
  useBreakpointValue
} from '@chakra-ui/react'

import themes from 'styles/alt-themes'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false
}: HeadingProps) => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <ChakraHEading
      as="h2"
      size={size}
      fontWeight="semibold"
      color={color}
      css={lineLeft && headerLineLeft}
    >
      {children}
    </ChakraHEading>
  )
}

const headerLineLeft: ChakraHeadingProps = {
  paddingLeft: themes.spacings.xxsmall,
  borderLeft: `0.5rem solid ${themes.colors.secondary}`
}

export default Heading
