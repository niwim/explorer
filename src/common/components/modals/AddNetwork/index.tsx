import { FC } from 'react';

import { Box } from '../../../../ui/Box';
import { Modal } from '../../../../ui/Modal';
import { Stack } from '../../../../ui/Stack';
import { Text } from '../../../../ui/Text';
import { TextLink } from '../../../../ui/TextLink';
import { MODALS } from '../../../constants/constants';
import { useAppDispatch } from '../../../state/hooks';
import { useOpenedModal } from '../modal-slice';
import { AddNetworkForm } from './AddNetworkForm';

export const AddNetworkModal: FC = () => {
  const modal = useOpenedModal();
  const dispatch = useAppDispatch();
  const isOpen = modal === MODALS.ADD_NETWORK;
  return (
    <Modal title={'Add a network'} isOpen={isOpen}>
      <Stack spacing="16px">
        <Box>
          <Text fontSize={'14px'} color={'textBody'}>
            Use this form to add a new instance of the{' '}
            <TextLink
              display="inline"
              as="a"
              href="https://github.com/blockstack/stacks-blockchain-api"
              target="_blank"
              color={'accent'}
            >
              Stacks Blockchain API
            </TextLink>
            . Make sure you review and trust the host before you add it.
          </Text>
        </Box>
        <AddNetworkForm />
      </Stack>
    </Modal>
  );
};
