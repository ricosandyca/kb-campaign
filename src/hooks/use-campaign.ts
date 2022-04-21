import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { fetchCampaigns } from '~/services/campaign';
import {
  campaignListState,
  campaignSortState,
  sortedCampaignListState,
} from '~/store/campaign';
import { Campaign } from '~/types/campaign';

export function useCampaignListFetcher() {
  const sortedCampaigns = useRecoilValue(sortedCampaignListState);
  const [campaigns, setCampaigns] = useRecoilState(campaignListState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCampaigns()
      .then(setCampaigns)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { campaigns, sortedCampaigns, isLoading, error };
}

export function useSortCampaignAction() {
  const [sortValue, setSortValue] = useRecoilState(campaignSortState);

  const activeKeys = useMemo(() => {
    return Object.entries(sortValue)
      .filter(([_, value]) => value !== 0)
      .map(([key]) => key) as (keyof Campaign)[];
  }, [sortValue]);

  const isFilterActive = useMemo(() => {
    return activeKeys.length > 0;
  }, [activeKeys]);

  const handleToggleSortParam = useCallback(
    (key: keyof Campaign, value: number) => {
      setSortValue((prev) => {
        const newSortValue = { ...prev };
        newSortValue[key] = newSortValue[key] ? 0 : value;
        return newSortValue;
      });
    },
    [],
  );

  return { isFilterActive, activeKeys, handleToggleSortParam };
}
