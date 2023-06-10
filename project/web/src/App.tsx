import * as React from 'react';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import FilmList from './components/film/FilmList';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './apollo/createApolloClient';

const apolloClient = createApolloClient();

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box>
        <Text>
          Ghibli GraphQl
          <FilmList />
        </Text>
      </Box>
    </ChakraProvider>
  </ApolloProvider>
);
