import React from 'react'
import { Heading as ChakraHeading, useBreakpointValue } from '@chakra-ui/react'

import themes from 'styles/alt-themes'

export type HeadingProps = {
  children: React.ReactNode
  color?: string
  lineLeft?: boolean
  huge?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  huge = false
}: HeadingProps) => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <ChakraHeading
      as="h2"
      size={huge ? 'lg' : size}
      fontWeight="semibold"
      color={color}
      css={lineLeft && headerLineLeft}
    >
      {children}
    </ChakraHeading>
  )
}

const headerLineLeft = {
  paddingLeft: themes.spacings.xxsmall,
  borderLeft: `0.5rem solid ${themes.colors.secondary}`
}

export default Heading
