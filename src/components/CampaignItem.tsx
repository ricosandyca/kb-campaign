import { Box, Image, Progress, Text, VStack } from '@chakra-ui/react';
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
      title={campaign.title}
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
      <Box p={4} w="full">
        <VStack w="full" align="flex-start">
          {/* Campaign title */}
          <Text
            fontSize="md"
            fontWeight="500"
            noOfLines={1}
            textTransform="capitalize"
          >
            {campaign.title}
          </Text>

          {/* Campaign progress */}
          <Progress
            w="full"
            size="xs"
            colorScheme="primary"
            value={50}
            rounded="xl"
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default memo(CampaignItem);
