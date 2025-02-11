'use client';

import { useColorMode } from '@chakra-ui/react';
import { FC, ReactNode, memo } from 'react';

import { Box } from '../../ui/Box';
import { Flex, FlexProps } from '../../ui/Flex';
import { leftLineCss } from '../styles/hover';

interface TwoColumnsListProps extends FlexProps {
  icon: ReactNode;
  leftContent: {
    title: ReactNode;
    subtitle: ReactNode;
  };
  rightContent?: {
    title: ReactNode;
    subtitle: ReactNode;
  };
}

export const TwoColsListItem: FC<TwoColumnsListProps> = memo(
  ({ icon, leftContent, rightContent, ...rest }) => {
    return (
      <Flex
        flexGrow={1}
        gap={'16px'}
        alignItems={'center'}
        py={'24px'}
        css={leftLineCss(useColorMode().colorMode)}
        minWidth={0}
        {...rest}
      >
        <Box width={'40px'}>{icon}</Box>
        <Flex width={'100%'} minWidth={'0px'} direction={['column', 'row']} gap={['8px', '0px']}>
          <Flex direction={'column'} gap={'6px'} minWidth={0}>
            <Flex direction={'column'} minHeight={'24px'} justifyContent={'center'}>
              {leftContent.title}
            </Flex>
            <Box>{leftContent.subtitle}</Box>
          </Flex>
          {rightContent && (
            <Flex direction={'column'} gap={'8px'} ml={['0px', 'auto']} flexShrink={0}>
              <Box alignSelf={['flex-start', 'flex-end']}>{rightContent.title}</Box>
              <Box alignSelf={['flex-start', 'flex-end']}>{rightContent.subtitle}</Box>
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }
);
