import { Box, Heading, HStack } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';

import appConfig from '~/config/app';
import { withContainer } from '~/hoc/with-container';

export type ShellProps = {
  children: ReactNode;
};

const AppBarContent: FC = withContainer(() => {
  return (
    <HStack h="full" w="full" align="center">
      {/* App logo */}
      <HStack>
        <Box
          borderColor="primary.200"
          borderWidth="2px"
          borderRadius="full"
          h="50px"
          w="50px"
          backgroundImage="/kitabisa-logo.png"
          backgroundSize="100%"
        />
        <Heading color="primary.400" fontWeight="500" fontSize="xl">
          {appConfig.appName}
        </Heading>
      </HStack>
    </HStack>
  );
});

const Shell: FC<ShellProps> = ({ children }) => {
  return (
    <Box position="relative">
      {/* App bar */}
      <Box
        position="fixed"
        top={0}
        w="full"
        h="80px"
        zIndex={2}
        bg="whiteAlpha.800"
        backdropFilter="blur(5px) saturate(180%)"
        shadow="sm"
      >
        <AppBarContent />
      </Box>

      {/* Main content */}
      <Box py="130px" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default memo(Shell);
