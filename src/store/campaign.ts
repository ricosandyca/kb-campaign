import { atom, selector } from 'recoil';

import { Campaign } from '~/types/campaign';

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

    const sortKeys = Object.keys(sortValue) as (keyof Campaign)[];
    if (sortKeys.length <= 0) return campaigns;

    // sort campaigns
    campaigns.sort((a, b) => {
      for (const key of sortKeys) {
        // check value type
        let comparisonResult: number;
        if (typeof a[key] === 'number') {
          comparisonResult = (+a[key] - +b[key]) * +sortValue[key]!;
        } else {
          comparisonResult =
            a[key].toString().localeCompare(b[key].toString()) *
            +sortValue[key]!;
        }

        if (comparisonResult === 0) continue;
        return comparisonResult;
      }
      return 0;
    });

    return campaigns;
  },
});
