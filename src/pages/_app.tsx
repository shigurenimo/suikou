import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { Aside } from "src/components/Aside"
import "src/index.css"
import { theme } from "src/theme"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (path: string) => {
  //     gtag("config", "G-6ZRNQNDK1C", {
  //       page_path: path,
  //     })
  //   }
  //   router.events.on("routeChangeComplete", handleRouteChange)
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange)
  //   }
  // }, [])

  return (
    <ChakraProvider theme={theme}>
      <Aside />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
