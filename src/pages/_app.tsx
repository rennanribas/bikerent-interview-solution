import React from 'react'
import { AppProps } from 'next/app'
import 'styles/global.css'
import { BikeProvider } from 'context/BikeContext'
import { ThemeProvider } from '@mui/material'
import { AuthProvider } from 'context/AuthContext'
import theme from 'styles/theme'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Bike Rental - Best Prices</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BikeProvider>
            <Component {...pageProps} />
          </BikeProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
