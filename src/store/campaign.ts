import { atom, selector } from 'recoil';

import { Campaign } from '~/types/campaign';
import { sortArrayOfObject } from '~/utils/array';

export const campaignListState = atom<Campaign[]>({
  key: 'campaignListState',
  default: [],
});

// -1 to sort descendingly
// 1 to sort ascendingly
export const campaignSortState = atom<Partial<Record<keyof Campaign, number>>>({
  key: 'compaignSortState',
  default: {},
});

export const sortedCampaignListState = selector<Campaign[]>({
  key: 'sortedCampaignListState',
  get: ({ get }) => {
    const campaigns = [...get(campaignListState)];
    const sortValue = get(campaignSortState);

    // sort campaign list by sort sort value
    return sortArrayOfObject(campaigns, sortValue);
  },
});
