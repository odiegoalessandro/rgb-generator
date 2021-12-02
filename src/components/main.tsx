import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import { ReactNode } from "react"

interface MainProps {
  children: ReactNode
}

function Main({ children }: MainProps){
  return (
    <Box as="main">
      <Head>
        <meta name="description" content="Gerador de RBG" />
        <meta name="author" content="Diego" />
        <meta property="og:site_name" content="RGB generator" />
        <meta property="og:type" content="website" />
        <title>Gerador de RGB</title>
      </Head>
      <Container maxW="container.md">
        {children}
      </Container>
    </Box>
  )
}

export default Main