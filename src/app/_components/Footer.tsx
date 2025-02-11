'use client';

import Link, { LinkProps } from 'next/link';
import React, { FC, HTMLProps } from 'react';

import { PAGE_MAX_WIDTH } from '../../common/constants/constants';
import { RELEASE_TAG_NAME } from '../../common/constants/env';
import { useGlobalContext } from '../../common/context/useAppContext';
import { buildUrl } from '../../common/utils/buildUrl';
import { Box } from '../../ui/Box';
import { Flex } from '../../ui/Flex';
import { TextLink } from '../../ui/TextLink';

const FooterLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
  target,
  rel,
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <TextLink
        cursor="pointer"
        textStyle="body.small"
        color={'textCaption'}
        textDecoration="none"
        fontSize={'14px'}
        _hover={{ textDecoration: 'underline' }}
        target={target}
        rel={rel}
      >
        {children}
      </TextLink>
    </Link>
  );
};

export const Footer: FC = () => {
  const network = useGlobalContext().activeNetwork;

  return (
    <Box
      mx="auto"
      width="100%"
      maxWidth={PAGE_MAX_WIDTH}
      mt={'32px'}
      mb={['16px', '16px', '32px']}
      px={['16px', '16px', '32px']}
    >
      <Flex
        pt="16px"
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'unset']}
        textAlign={['center', 'center', 'unset']}
        borderTop="1px solid var(--stacks-colors-border)"
        px={'unset'}
      >
        <Flex display="flex" flexDirection={'column'} gap="5px">
          <Flex pb={['8px', '8px', 'unset']} pr={['unset', 'unset', '16px']} gap={'16px'}>
            <FooterLink href={buildUrl('/transactions', network)}>Recent transactions</FooterLink>
            {!network.isSubnet && (
              <FooterLink href={buildUrl('/sandbox/deploy', network)}>Sandbox</FooterLink>
            )}
            <FooterLink
              href="https://immunefi.com/bounty/stacks/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Found a bug in the Stacks Blockchain?
            </FooterLink>
          </Flex>
          <Box>
            <FooterLink
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Market data provided by CoinGecko
            </FooterLink>
          </Box>
        </Flex>

        <Flex display="flex" marginLeft={'auto'} flexDirection={'column'} gap="5px">
          <Flex ml={['unset', 'unset', 'auto']} gap={'16px'}>
            <FooterLink
              href="https://github.com/hirosystems/explorer/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Submit report or request
            </FooterLink>
            <FooterLink href="mailto:support@hiro.so">Support</FooterLink>
            <FooterLink
              href="https://www.hiro.so/p/terms-privacy"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Terms & Privacy
            </FooterLink>
          </Flex>
          {RELEASE_TAG_NAME && (
            <Box marginLeft={'auto'}>
              <FooterLink
                href={`https://github.com/hirosystems/explorer/releases/tag/${RELEASE_TAG_NAME}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Version {RELEASE_TAG_NAME}
              </FooterLink>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
