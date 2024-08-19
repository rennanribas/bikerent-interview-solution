import React from 'react'
import { AppProps } from 'next/app'
import '../src/styles/global.css'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import theme from '../src/styles/theme'
import { AuthProvider } from 'context/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BikeProvider>
          <Component {...pageProps} />
        </BikeProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
