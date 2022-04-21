import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { withContainer } from '~/hoc/with-container';
import { useCampaignListFetcher } from '~/hooks/use-campaign';
import CampaignList from '~/components/CampaignList';
import CampaignListLoading from '~/components/CampaignListLoading';

const MainPage: FC = () => {
  const { sortedCampaigns, isLoading } = useCampaignListFetcher();

  return (
    <Box>
      {isLoading ? (
        <CampaignListLoading noOfSkeletons={9} />
      ) : (
        <CampaignList campaigns={sortedCampaigns} />
      )}
    </Box>
  );
};

export default withContainer(MainPage);
