import { Box, IconButton as ChakraIconButton } from '@chakra-ui/react'
import { ReactElement } from 'react'

export type IconButtonProps = {
  children: ReactElement
  ariaLabel: string
  size?: 'sm' | 'md'
  onClick?: () => void
}

const IconButton = ({
  children,
  ariaLabel,
  onClick,
  size = 'sm'
}: IconButtonProps) => {
  return (
    <Box>
      <ChakraIconButton
        aria-label={ariaLabel}
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
        size={size}
        onClick={onClick}
        _hover={{ opacity: '0.9' }}
        _focus={{ shadow: 'none' }}
        icon={children}
      />
    </Box>
  )
}

export default IconButton
