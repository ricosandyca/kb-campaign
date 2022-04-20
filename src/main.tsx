import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import theme from '~/styles/theme';
import App from '~/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
);
