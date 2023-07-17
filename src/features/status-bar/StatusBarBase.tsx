'use client';

import { FC, ReactNode } from 'react';
import { IncidentImpact } from 'statuspage.io';
import { Icon } from '@/ui/Icon';
import { BsExclamationCircle, BsExclamationTriangle } from 'react-icons/bs';
import { getColor } from '@/features/status-bar/utils';
import { Box } from '@/ui/Box';
import { Flex } from '@/ui/Flex';
import { PAGE_MAX_WIDTH } from '@/common/constants';

export const StatusBarBase: FC<{ impact: IncidentImpact; content: ReactNode }> = ({
  content,
  impact,
}) => {
  if (impact === IncidentImpact.None) return null;
  const icon =
    impact === IncidentImpact.Critical ? (
      <Icon as={BsExclamationCircle} color={getColor(impact)} />
    ) : (
      <Icon as={BsExclamationTriangle} color={getColor(impact)} />
    );
  return (
    <Box
      width={'100%'}
      background={'rgba(255, 255, 255, 0.8)'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      padding={'20px 0'}
    >
      <Flex
        width={'100%'}
        maxWidth={PAGE_MAX_WIDTH}
        padding={'0 32px'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'20px'}
      >
        {icon}
        {content}
      </Flex>
    </Box>
  );
};
