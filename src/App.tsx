import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

// import isPropValid from '@emotion/is-prop-valid'
// import { StyleSheetManager } from 'styled-components'

export function App() {
  return (
    // <StyleSheetManager shouldForwardProp={isPropValid}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    // </StyleSheetManager>
  )
}
