import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
