import pluralize from 'pluralize';
import React from 'react';

import { Block } from '@stacks/stacks-blockchain-api-types';

import { BtcStxBlockLinks } from '../../../common/components/BtcStxBlockLinks';
import { BlockLink } from '../../../common/components/ExplorerLinks';
import { TwoColsListItem } from '../../../common/components/TwoColumnsListItem';
import { addSepBetweenStrings, toRelativeTime, truncateMiddle } from '../../../common/utils/utils';
import { Circle } from '../../../ui/Circle';
import { Flex, FlexProps } from '../../../ui/Flex';
import { Icon } from '../../../ui/Icon';
import { CheckIcon } from '../../../ui/icons';
import { Caption, Text } from '../../../ui/typography';

export const BlockListItem: React.FC<{ block: Block } & FlexProps> = React.memo(
  ({ block, ...rest }) => {
    return (
      <TwoColsListItem
        icon={
          <BlockLink hash={block.hash}>
            <Circle size="40px">
              <Icon as={CheckIcon} size="16px" color={'textCaption.light'} />
            </Circle>
          </BlockLink>
        }
        leftContent={{
          title: (
            <Flex
              onClick={e => {
                e.stopPropagation();
              }}
              color={'textTitle'}
              alignItems="center"
            >
              <BtcStxBlockLinks
                btcBlockHeight={block.burn_block_height}
                stxBlockHeight={block.height}
                stxBlockHash={block.hash}
                fontSize={'16px'}
              />
            </Flex>
          ),
          subtitle: (
            <Caption display="block">
              {addSepBetweenStrings([
                `${block?.microblocks_accepted?.length || 0} ${pluralize(
                  'microblock',
                  block?.microblocks_accepted?.length || 0
                )}`,
              ]) +
                ' · ' +
                addSepBetweenStrings([
                  `${block?.txs?.length || 0} ${pluralize('transaction', block?.txs?.length || 0)}`,
                ])}
            </Caption>
          ),
        }}
        rightContent={{
          title: (
            <Text
              fontSize="14px"
              width="100%"
              textAlign="right"
              color={'textBody'}
              display="block"
              suppressHydrationWarning={true}
            >
              {toRelativeTime(block.burn_block_time * 1000)}
            </Text>
          ),
          subtitle: <Caption display="block">{truncateMiddle(block.hash)}</Caption>,
        }}
        {...rest}
      />
    );
  }
);
