/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import themes from 'styles/alt-themes'

export type ButtonProps = {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'submit' | 'button'
  fullWidth?: boolean
  leftIcon?: React.ReactNode | any
  rightIcon?: React.ReactNode | any
  onClick?: () => void
  isLoading?: boolean
  as?: 'button' | 'a'
  href?: string
  target?: string
  color?: string
  variant?: 'solid' | 'outline' | 'ghost'
}

const Button: React.ForwardRefRenderFunction<ChakraButtonProps, ButtonProps> = (
  {
    children,
    size = 'md',
    type = 'button',
    fullWidth = false,
    leftIcon,
    rightIcon,
    onClick,
    color = 'purple',
    variant = 'solid',
    as = 'button',
    isLoading = false,
    ...props
  },
  ref
) => {
  return (
    <ChakraButton
      colorScheme={color}
      size={size}
      isFullWidth={fullWidth}
      fontWeight="medium"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isLoading={isLoading}
      variant={variant}
      type={type}
      as={as}
      onClick={onClick}
      borderRadius={themes.border.radius}
      _focus={{ shadow: 'none' }}
      ref={ref}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default forwardRef(Button)
