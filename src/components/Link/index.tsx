import { Box } from '@chakra-ui/react'
import * as S from './styles'

export type LinkProps = {
  children: React.ReactNode
}

const Link = ({ children }: LinkProps) => {
  return (
    <Box>
      <S.MenuLink colorMode="dark">{children}</S.MenuLink>
    </Box>
  )
}

export default Link
