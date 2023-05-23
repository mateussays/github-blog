import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Teste</div>
    </ThemeProvider>
  )
}
