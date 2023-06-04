import * as React from 'react';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import FilmList from './components/film/FilmList';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

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
