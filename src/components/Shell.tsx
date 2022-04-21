import { Box, Heading, HStack, Image } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';

import CampaignSortSelect from '~/components/CampaignSortSelect';
import appConfig from '~/config/app';
import { withContainer } from '~/hoc/with-container';

export type ShellProps = {
  children: ReactNode;
};

const AppBarContent: FC = withContainer(() => {
  return (
    <HStack h="full" w="full" align="center">
      {/* App logo */}
      <HStack flex={1}>
        <Box borderColor="primary.200" borderWidth="2px" borderRadius="full">
          <Image alt="App logo" src="/kitabisa-logo.png" h="50px" w="50px" />
        </Box>
        <Heading color="primary.400" fontWeight="500" fontSize="xl">
          {appConfig.appName}
        </Heading>
      </HStack>

      {/* Campaign sort */}
      <CampaignSortSelect />
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
        backdropFilter="blur(8px) saturate(360%)"
        shadow="sm"
      >
        <AppBarContent />
      </Box>

      {/* Main content */}
      <Box pt={['100px', null, null, null, '120px']} pb="60px" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default memo(Shell);
