/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button as ChakraButton } from '@chakra-ui/react'
import React from 'react'
import themes from 'styles/alt-themes'

export type ButtonProps = {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  leftIcon?: React.ReactNode | any
  rightIcon?: React.ReactNode | any
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  isLoading?: boolean
  as?: 'button' | 'a'
  href?: string
  target?: string
}

const Button = ({
  children,
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  as = 'button',
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      colorScheme="purple"
      size={size}
      isFullWidth={fullWidth}
      fontWeight="medium"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isLoading={isLoading}
      as={as}
      onClick={onClick}
      borderRadius={themes.border.radius}
      _focus={{ shadow: 'none' }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
