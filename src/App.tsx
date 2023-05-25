import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GithubProvider } from './contexts/GithubContext'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GithubProvider>
        <BrowserRouter>
          <DefaultLayout />
          <AppRoutes />
        </BrowserRouter>
      </GithubProvider>
    </ThemeProvider>
  )
}
