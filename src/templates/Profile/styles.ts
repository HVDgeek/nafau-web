import styled from 'styled-components'
import media from 'styled-media-query'
import themes from 'styles/alt-themes'

export const Main = styled.main`
  margin-top: ${themes.spacings.medium};

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 40px;
  `}
`
