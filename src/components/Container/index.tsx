import styled from 'styled-components'
import theme from 'styles/alt-themes'

export const Container = styled.div`
  max-width: ${theme.grid.container};
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(${theme.grid.gutter} / 2);
  padding-right: calc(${theme.grid.gutter} / 2);
`
