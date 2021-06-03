import { useMediaQuery } from '@chakra-ui/react'

const breakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
}

type breakpointProps = {
  size: 'huge' | 'large' | 'medium' | 'small'
}

type BetweenProps = {
  firstSize: 'huge' | 'large' | 'medium' | 'small'
  lastSize: 'huge' | 'large' | 'medium' | 'small'
}

export const useLessThan = ({ size }: breakpointProps) => {
  const [lessThan] = useMediaQuery(`(max-width: ${breakpoints[size]}px)`)

  console.log(breakpoints[size])

  return {
    lessThan
  }
}

export const useGreaterThan = ({ size }: breakpointProps) => {
  const [greaterThan] = useMediaQuery(`(min-width: ${breakpoints[size]}px)`)

  return {
    greaterThan
  }
}

export const useBetween = ({ firstSize, lastSize }: BetweenProps) => {
  const [between] = useMediaQuery(
    `(min-width: ${breakpoints[firstSize]}px) and (max-width: ${breakpoints[lastSize]}px)`
  )

  return {
    between
  }
}
