'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';



 const AppMui = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default AppMui