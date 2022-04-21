import { SimpleGrid } from '@chakra-ui/react';
import { FC, memo } from 'react';

import CampaignItem from '~/components/CampaignItem';
import { Campaign } from '~/types/campaign';

export type CampaignListProps = {
  campaigns: Campaign[];
};

const CampaignList: FC<CampaignListProps> = ({ campaigns }) => {
  return (
    <SimpleGrid columns={[1, null, 2, null, 3]} spacing={[4, null, 6, null, 8]}>
      {campaigns.map((campaign) => (
        <CampaignItem key={campaign.id} campaign={campaign} />
      ))}
    </SimpleGrid>
  );
};

export default memo(CampaignList);
