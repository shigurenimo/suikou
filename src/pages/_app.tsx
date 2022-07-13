import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import React, { FunctionComponent, useEffect } from "react"
import { Aside } from "../core/components/Aside"
import "../index.css"
import { theme } from "../core/theme"

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      gtag("config", "G-6ZRNQNDK1C", {
        page_path: path,
      })
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Aside />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
