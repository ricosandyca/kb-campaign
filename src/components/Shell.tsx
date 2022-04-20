import { Box, HStack, Image } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';

import { withContainer } from '~/hoc/with-container';

export type ShellProps = {
  children: ReactNode;
};

const AppBarContent: FC = withContainer(() => {
  return (
    <HStack h="full" w="full" align="center">
      {/* App logo */}
      <Image position="relative" h="40px" ml="-8px" src="/kitabisa-logo.png" />
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
        w="100vw"
        h="90px"
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
