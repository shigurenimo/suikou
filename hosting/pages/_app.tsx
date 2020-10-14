import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import '../styles/index.css'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
