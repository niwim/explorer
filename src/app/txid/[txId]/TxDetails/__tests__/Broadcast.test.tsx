import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import { Transaction } from '@stacks/stacks-blockchain-api-types';

import { Broadcast } from '../Broadcast';

describe('<Broadcast />', () => {
  it('renders correctly', () => {
    const hardcodedDate = new Date('2023-01-01T12:00:00Z');

    const mockTx = {
      receipt_time: Math.floor(hardcodedDate.getTime() / 1000),
    } as unknown as Transaction;

    const { asFragment } = render(<Broadcast tx={mockTx} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
