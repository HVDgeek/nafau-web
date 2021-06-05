import { Box, IconButton as ChakraIconButton } from '@chakra-ui/react'
import { ReactElement } from 'react'

export type IconButtonProps = {
  children: ReactElement
  ariaLabel: string
  onClick?: () => void
}

const IconButton = ({ children, ariaLabel, onClick }: IconButtonProps) => {
  return (
    <Box>
      <ChakraIconButton
        aria-label={ariaLabel}
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
        size="sm"
        onClick={onClick}
        _focus={{ shadow: 'none' }}
        icon={children}
      />
    </Box>
  )
}

export default IconButton
