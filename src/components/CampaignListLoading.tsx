import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { createArray } from '~/utils/array';

export type CampaignListLoadingProps = {
  noOfSkeletons?: number;
};

const CampaignListLoading: FC<CampaignListLoadingProps> = ({
  noOfSkeletons,
}) => {
  const nums = createArray(noOfSkeletons || 9);

  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={8}>
      {nums.map((n) => (
        <Skeleton key={n} w="full" h="300px" />
      ))}
    </SimpleGrid>
  );
};

export default memo(CampaignListLoading);
