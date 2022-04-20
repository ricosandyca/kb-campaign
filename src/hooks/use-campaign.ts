import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { fetchCampaigns } from '~/services/campaign';
import { campaignListState } from '~/store/campaign';

export function useCampaignListFetcher() {
  const [campaigns, setCampaigns] = useRecoilState(campaignListState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCampaigns()
      .then(setCampaigns)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { campaigns, isLoading, error };
}
