import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Campaign, CampaignType } from '~/types/campaign';
import CampaignList from '../CampaignList';

// dummy campaign list data
const campaignListData: Campaign[] = [
  {
    campaigner: 'Kitabisa.com',
    campaigner_badge:
      'https://assets.kitabisa.com/images/icon__verified-user.svg',
    campaigner_is_verified: true,
    campaigner_type: CampaignType.PERSONAL,
    category_name: 'Bencana Alam',
    custom_fb_pixel: '',
    days_remaining: 0,
    donation_percentage: 0.357227,
    donation_received: 178613497,
    donation_target: 500000000,
    expired: 2147483647,
    id: 94597,
    image:
      'https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg',
    is_featured: 0,
    is_forever_running: true,
    is_open_goal: false,
    order: 1,
    parent_project_id: 0,
    request_userdata: false,
    short_url: 'bisabangkit',
    title: '#BisaBangkit Bersama Kitabisa',
  },
  {
    campaigner: 'Saepul Aziz',
    campaigner_badge: '',
    campaigner_is_verified: false,
    campaigner_type: CampaignType.PERSONAL,
    category_name: 'Bencana Alam',
    custom_fb_pixel: '',
    days_remaining: 0,
    donation_percentage: 0.00200237,
    donation_received: 600711,
    donation_target: 300000000,
    expired: 2147483647,
    id: 29755,
    image:
      'https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/29755/31__1489611820_67821505206_f.jpg',
    is_featured: 0,
    is_forever_running: true,
    is_open_goal: false,
    order: 2,
    parent_project_id: 0,
    request_userdata: false,
    short_url: 'bantuankebakaran',
    title: 'ponpes al-muawanah tasikmalaya kebakaran',
  },
];

describe('CampaignList component testing', () => {
  it('Should render 2 items of campaigns', () => {
    render(<CampaignList campaigns={campaignListData} />);

    const campaignOneTitleElm = screen.getByText(
      /#BisaBangkit Bersama Kitabisa/i,
    );
    const campaignTwoTitleElm = screen.getByText(
      /ponpes al-muawanah tasikmalaya kebakara/i,
    );
    const campaignImageElms = screen.getAllByRole('img');
    expect(campaignOneTitleElm).toBeInTheDocument();
    expect(campaignTwoTitleElm).toBeInTheDocument();
    expect(campaignImageElms).toHaveLength(2);
  });
});
