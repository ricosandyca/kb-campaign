import appConfig from '~/config/app';
import { Campaign } from '~/types/campaign';

export async function fetchCampaigns() {
  const res = await fetch(appConfig.kitabisaCampaignURL);
  const data = await res.json();
  return data.data as Campaign[];
}
