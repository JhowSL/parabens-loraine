import { AppRouterCacheProvider, ThemeProvider } from './components/ui/MUI'
import { theme } from './context'
import React from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps): React.ReactElement {
  return (
    <html lang="pt-Br">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
