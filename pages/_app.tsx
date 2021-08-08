import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../global/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
      
    </ThemeProvider>
  )
}
export default MyApp
