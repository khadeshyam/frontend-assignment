// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import { CatProvider } from './contexts/CatContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <CatProvider>
        <App />
      </CatProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);