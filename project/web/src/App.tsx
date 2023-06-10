import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createApolloClient } from './apollo/createApolloClient';
import Main from './pages/Main';

const apolloClient = createApolloClient();

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  );
}
