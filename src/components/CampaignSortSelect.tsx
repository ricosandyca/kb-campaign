import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { FC, memo, useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { campaignSortState } from '~/store/campaign';
import { Campaign } from '~/types/campaign';

export type SortParam = {
  id: keyof Campaign;
  value: number;
  label: string;
  isActive: boolean;
};

const CampaignSortSelect: FC = () => {
  const [sortValue, setSortValue] = useRecoilState(campaignSortState);

  const isFilterActive = useMemo(() => {
    return Object.values(sortValue).some((val) => val !== 0);
  }, [sortValue]);

  const sortParams = useMemo<SortParam[]>(() => {
    return [
      {
        id: 'days_remaining',
        value: 1, // ascending
        label: 'Hari tersisa',
        isActive: !!sortValue.days_remaining,
      },
      {
        id: 'donation_target',
        value: 1, // ascending
        label: 'Target donasi',
        isActive: !!sortValue.donation_target,
      },
    ];
  }, [sortValue]);

  const toggleSetSortValue = useCallback(
    (sortKey: keyof Campaign, sortVal: number) => {
      setSortValue((prev) => ({ ...prev, [sortKey]: sortVal }));
    },
    [],
  );

  return (
    <Menu isLazy placement="bottom-end">
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
            onClick={() =>
              toggleSetSortValue(sp.id, sp.isActive ? 0 : sp.value)
            }
          >
            <HStack w="full">
              <Text flex={1}>{sp.label}</Text>
              {sp.isActive && (
                <Box rounded="full" w="8px" h="8px" bg="primary.500" />
              )}
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default memo(CampaignSortSelect);
