'use client';

import * as React from 'react';
import { TbSearch } from 'react-icons/tb';

import { Section } from '../../common/components/Section';
import { ExplorerSkeletonLoader } from '../../common/components/loaders/skeleton-common';
import { Flex } from '../../ui/Flex';
import { Icon } from '../../ui/Icon';
import { InputGroup } from '../../ui/InputGroup';
import { InputRightElement } from '../../ui/InputRightElement';
import { useColorMode } from '../../ui/hooks/useColorMode';
import { PageTitle } from '../_components/PageTitle';
import { TokenTableSkeleton } from './TokensList/TokenTableSkeleton';

export default function Loading() {
  const colorMode = useColorMode().colorMode;
  return (
    <Flex direction={'column'} mt="32px" gap="32px">
      <PageTitle>
        <ExplorerSkeletonLoader width={'400px'} height={'31px'} />
      </PageTitle>
      <Section
        title={'Tokens'}
        gridColumnStart={['1', '1', '2']}
        gridColumnEnd={['2', '2', '3']}
        minWidth={0}
        topRight={
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <Icon as={TbSearch} color={`textCaption.${colorMode}`} />
            </InputRightElement>
            <ExplorerSkeletonLoader width={'200px'} height={'40px'} />
          </InputGroup>
        }
      >
        <TokenTableSkeleton />
      </Section>
    </Flex>
  );
}
