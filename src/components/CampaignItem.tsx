import { Box, HStack, Image, Progress, Text, VStack } from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';

import { Campaign } from '~/types/campaign';
import { formatToIDR } from '~/utils/currency';

export type CampaignItemProps = {
  campaign: Campaign;
};

const CampaignItem: FC<CampaignItemProps> = ({ campaign }) => {
  const isReachedDonationGoal = useMemo(() => {
    return campaign.donation_percentage >= 1;
  }, [campaign.donation_percentage]);
  const campaignDetails = useMemo(() => {
    return [
      {
        label: 'Terkumpul',
        value: formatToIDR(campaign.donation_received, true),
        align: 'flex-start',
      },
      {
        label: 'Sisa hari',
        value: campaign.days_remaining,
        align: 'flex-end',
      },
    ];
  }, [campaign]);

  return (
    <Box
      bg="white"
      shadow="md"
      rounded="lg"
      position="relative"
      overflow="hidden"
      title={campaign.title}
    >
      {/* Campaign image */}
      <Image src={campaign.image} h="260px" w="full" objectFit="cover" />

      {/* Campaign info */}
      <Box p={4} w="full">
        <VStack w="full" align="flex-start">
          {/* Campaign title */}
          <Text
            fontSize="lg"
            fontWeight="semibold"
            noOfLines={1}
            textTransform="capitalize"
          >
            {campaign.title}
          </Text>

          {/* Campaign progress */}
          <Progress
            w="full"
            size="xs"
            colorScheme={isReachedDonationGoal ? 'pink' : 'gray'}
            value={campaign.donation_percentage * 100}
            rounded="xl"
          />

          {/* Campaign detail */}
          <HStack w="full" justify="space-between">
            {campaignDetails.map((detail, i) => (
              <VStack key={i} align={detail.align} spacing={1}>
                <Text fontSize="sm">{detail.label}</Text>
                <Text fontSize="sm" fontWeight="semibold">
                  {detail.value}
                </Text>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default memo(CampaignItem);
