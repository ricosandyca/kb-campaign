import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import CampaignListLoading from '~/components/CampaignListLoading';

describe('CampaignListLoading component testing', () => {
  it('Should render 6 skeleton items', () => {
    const { container } = render(<CampaignListLoading noOfSkeletons={6} />);
    const skeletonElms = container.getElementsByClassName('chakra-skeleton');
    expect(skeletonElms).toHaveLength(6);
  });
});
