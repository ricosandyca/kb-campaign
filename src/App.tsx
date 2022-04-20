import { FC } from 'react';

import { withContainer } from '~/hoc/with-container';
import { useCampaignListFetcher } from '~/hooks/use-campaign';
import CampaignList from '~/components/CampaignList';

const App: FC = () => {
  const { campaigns } = useCampaignListFetcher();

  return <CampaignList campaigns={campaigns} />;
};

export default withContainer(App);
