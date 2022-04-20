import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import MainPage from '~/pages/main/MainPage';

const App: FC = () => {
  return (
    <Box py={16}>
      <MainPage />
    </Box>
  );
};

export default App;
