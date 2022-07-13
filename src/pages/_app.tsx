import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React, { FC, useEffect } from "react"
import { Aside } from "src/components/Aside"
import "src/index.css"
import { theme } from "src/theme"
import { getApps, initializeApp } from "firebase/app"
import { Router } from "next/router"
import {
  logEvent,
  getAnalytics,
  setAnalyticsCollectionEnabled,
} from "firebase/analytics"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (process.env.NODE_ENV !== "production") return
    const routeChangeComplete = () => {
      if (getApps().length === 0) return
      logEvent(getAnalytics(), "page_view", {
        page_location: document.title,
        page_path: location.href,
        page_title: location.pathname,
      })
    }
    Router.events.on("routeChangeComplete", routeChangeComplete)
    routeChangeComplete()
    return () => {
      Router.events.off("routeChangeComplete", routeChangeComplete)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Aside />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

if (getApps().length === 0) {
  initializeApp({
    apiKey: "AIzaSyApe1mnUDKLGUIXa0XtntxOe-k2vysY8L4",
    authDomain: "ejik3yfgcuhta376sw2p.firebaseapp.com",
    projectId: "ejik3yfgcuhta376sw2p",
    storageBucket: "ejik3yfgcuhta376sw2p.appspot.com",
    messagingSenderId: "1056518212822",
    appId: "1:1056518212822:web:ca40589b75cbf38a05cd77",
    measurementId: "G-Q1B4GLE32V",
  })
  if (process.env.NODE_ENV === "production") {
    setAnalyticsCollectionEnabled(getAnalytics(), true)
  }
}

export default App
