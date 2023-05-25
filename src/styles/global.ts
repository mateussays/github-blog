import { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/default'

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    font-family: 'nunito', sans-serif;
  }
`

export default GlobalStyles
