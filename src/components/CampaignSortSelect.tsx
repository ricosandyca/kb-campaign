import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';
import { useSortCampaignAction } from '~/hooks/use-campaign';

import { Campaign } from '~/types/campaign';

export type SortParam = {
  id: keyof Campaign;
  value: number;
  label: string;
  isActive: boolean;
};

const CampaignSortSelect: FC = () => {
  const { isFilterActive, activeKeys, handleToggleSortParam } =
    useSortCampaignAction();

  const sortParams = useMemo<SortParam[]>(() => {
    return [
      {
        id: 'days_remaining',
        value: 1, // ascending
        label: 'Hari tersisa',
        isActive: activeKeys.includes('days_remaining'),
      },
      {
        id: 'donation_target',
        value: 1, // ascending
        label: 'Target donasi',
        isActive: activeKeys.includes('donation_target'),
      },
    ];
  }, [activeKeys]);

  return (
    <Menu isLazy placement="bottom-end" closeOnSelect={false}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size="sm"
        fontWeight="500"
        colorScheme={isFilterActive ? 'primary' : 'gray'}
      >
        Urutkan
      </MenuButton>
      <MenuList>
        {sortParams.map((sp, i) => (
          <MenuItem
            key={i}
            fontSize="sm"
            onClick={() => handleToggleSortParam(sp.id, sp.value)}
            icon={
              <Box
                rounded="full"
                w="10px"
                h="10px"
                bg={sp.isActive ? 'primary' : 'gray.500'}
              />
            }
          >
            <Text flex={1}>{sp.label}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default memo(CampaignSortSelect);
