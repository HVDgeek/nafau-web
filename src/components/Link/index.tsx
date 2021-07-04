import { Box } from '@chakra-ui/react'
import * as S from './styles'

export type LinkProps = {
  children: React.ReactNode
  isActive: boolean
}

const Link = ({ children, isActive }: LinkProps) => {
  return (
    <S.MenuLink isActive={isActive} colorMode="dark">
      {children}
    </S.MenuLink>
  )
}

export default Link
