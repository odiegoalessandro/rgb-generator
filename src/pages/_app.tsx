import { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../lib/chakra-theme"
import GlobalStyles from "../styles/GlobalStyles"
import Main from "../components/main"
import React from "react"
import Fonts from "../components/fonts"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Main>
          <Fonts />
          <GlobalStyles />
          <Component {...pageProps} key={router.route} />
        </Main>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp