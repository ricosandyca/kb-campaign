import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CampaignItem from '~/components/CampaignItem';
import { Campaign, CampaignType } from '~/types/campaign';

describe('CampaignItem component testing', () => {
  it('Should render campaign item component correctly', () => {
    // dummy campaign data
    const campaignData: Campaign = {
      id: 41584,
      order: 9,
      parent_project_id: 0,
      title: 'Peduli Erupsi Gunung Agung, Karangasem-Bali',
      expired: 2147483647,
      image:
        'https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/41584/31_41584_1506369549_748730_f.jpg',
      days_remaining: 34,
      donation_received: 4166416,
      campaigner: 'Yayasan Sosial Gerbang Matahari Terbit Karangasem Bali',
      campaigner_type: CampaignType.PERSONAL,
      campaigner_badge: '',
      campaigner_is_verified: false,
      category_name: 'Bencana Alam',
      is_forever_running: true,
      is_open_goal: false,
      request_userdata: false,
      donation_target: 1000000000,
      donation_percentage: 0.004166416,
      short_url: 'yayasansosialgmt',
      is_featured: 0,
      custom_fb_pixel: '',
    };

    render(<CampaignItem campaign={campaignData} />);
    const titleElm = screen.getByText(
      /peduli erupsi gunung agung, karangasem-bali/i,
    );
    const daysRemainingElm = screen.getByText(/^34$/i);
    const donationReceivedElm = screen.getByText(/Rp 4.166.416/i);
    const progressBarElm = screen.getByRole('progressbar');
    const imageElm = screen.getByRole('img');

    expect(titleElm).toBeInTheDocument();
    expect(daysRemainingElm).toBeInTheDocument();
    expect(donationReceivedElm).toBeInTheDocument();
    expect(progressBarElm).toBeInTheDocument();
    expect(imageElm).toHaveAttribute(
      'src',
      'https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/41584/31_41584_1506369549_748730_f.jpg',
    );
  });
});
