import { Box, Image, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Campaign } from '~/types/campaign';

export type CampaignItemProps = {
  campaign: Campaign;
};

const CampaignItem: FC<CampaignItemProps> = ({ campaign }) => {
  return (
    <Box
      bg="white"
      shadow="lg"
      rounded="lg"
      position="relative"
      overflow="hidden"
    >
      {/* Campaign image */}
      <Box h="240px" position="relative">
        <Image src={campaign.image} h="full" objectFit="cover" />
        <Box
          w="full"
          h="full"
          bg="whiteAlpha.500"
          position="absolute"
          top={0}
          left={0}
        />
      </Box>

      {/* Campaign info */}
      <Box p={4}>
        <Text
          fontSize="md"
          fontWeight="500"
          noOfLines={2}
          textTransform="capitalize"
        >
          {campaign.title}
        </Text>
      </Box>
    </Box>
  );
};

export default memo(CampaignItem);
