import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { withContainer } from '~/hoc/with-container';
import { useCampaignListFetcher } from '~/hooks/use-campaign';
import CampaignList from '~/components/CampaignList';

const MainPage: FC = () => {
  const { campaigns } = useCampaignListFetcher();

  return (
    <Box py={16}>
      <CampaignList campaigns={campaigns} />
    </Box>
  );
};

export default withContainer(MainPage);
