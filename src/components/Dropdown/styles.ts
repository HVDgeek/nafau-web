import styled, { css } from 'styled-components'
import themes from 'styles/alt-themes'

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Title = styled.div`
  cursor: pointer;
  color: ${themes.colors.white};
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${themes.layers.alwaysOnTop};
  /* padding-right: 2rem; */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: ${themes.colors.black};
  color: ${themes.colors.black};
  margin-top: ${themes.spacings.xxsmall};
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 10px 5px 5px #181b23;
  position: absolute;
  z-index: ${themes.layers.alwaysOnTop};
  right: 0;
  &::before {
    content: '';
    position: absolute;
    border-right: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${themes.colors.black};
    top: -0.5rem;
    right: 2rem;
  }
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${themes.layers.overlay};
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${themes.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
