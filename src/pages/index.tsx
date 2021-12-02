import { Box, Flex, Heading, Stack } from "@chakra-ui/react"
import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import Span from "../components/span"

export default function Home() {
  const [red, setRed] = useState<number>(127)
  const [green, setGreen] = useState<number>(127)
  const [blue, setBlue] = useState<number>(127)
  const color = `rgba(${red}, ${green}, ${blue})`

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
          <Flex
            flexDir="column"
            bgColor="gray.700"
            borderRadius="md"
            justify="space-around"
            align="center"
            w="xl"
            h="md"
          >
            <Heading fontSize="2xl">
              Gerador de RGB
            </Heading>
            <Box 
              borderRadius="50%"
              bgColor={color}
              w="10rem"
              h="10rem"
            />
            <button 
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigator.clipboard.writeText(color)
                toast.success("Texto copiado")
              }}>
              <Span>
                {color}
              </Span>
            </button>
            <Stack direction={{ md: "row", base: "column" }}>
              <Flex 
                bgColor="red.500"
                w="auto"
                px="5px"
                h="30px"
              >
                <input
                  type="range"
                  step="5"
                  max="255"
                  min="0"
                  name="red"
                  value={red}
                  onChange={event => setRed(Number(event.target.value))}
                />
              </Flex>
              <Flex 
                bgColor="green"
                w="auto"
                px="5px"
                h="30px"
              >
                <input
                  type="range"
                  step="5"
                  max="255"
                  min="0"
                  name="green"
                  value={green}
                  onChange={event => setGreen(Number(event.target.value))}
                />
              </Flex>
              <Flex 
                bgColor="blue.300"
                w="auto"
                px="5px"
                h="30px"
              >
                <input
                  type="range"
                  step="5"
                  max="255"
                  min="0"
                  name="blue"
                  value={blue}
                  onChange={event => setBlue(Number(event.target.value))}
                />
              </Flex>
            </Stack>
          </Flex>
      </Box>
      <Toaster 
        position="bottom-right"
        toastOptions={{ 
          style: {
            background: "#333",
            color: "#fff"
          }
        }}
      />
    </>
  )
}
