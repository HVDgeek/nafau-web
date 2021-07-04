import styled from 'styled-components'
import theme from 'styles/alt-themes'

type MenuLinkProps = {
  colorMode: 'dark' | 'light'
  isActive: boolean
}

export const MenuLink = styled.a<MenuLinkProps>`
  position: relative;
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.xsmall};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: ${theme.colors.primary};
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 0.3rem;
    background-color: ${({ isActive }) =>
      isActive ? theme.colors.primary : 'transparent'};
    animation: hoverAnimation 0.2s forwards;
  }
`
