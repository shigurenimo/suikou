import { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'
import { Aside } from '../components/Aside'
import '../index.css'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Aside />
      <Component {...pageProps} />
    </>
  )
}

export default App
