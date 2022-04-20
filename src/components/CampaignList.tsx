import { FC } from 'react';

import { Campaign } from '~/types/campaign';

export type CampaignListProps = {
  campaigns: Campaign[];
};

const CampaignList: FC<CampaignListProps> = ({ campaigns }) => {
  console.log(campaigns);
  return null;
};

export default CampaignList;
