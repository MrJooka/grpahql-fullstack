import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Text>
        Ghibli GraphQl
      </Text>
    </Box>
  </ChakraProvider>
)
