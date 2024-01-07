import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../renderWithProviders';

import { SubmitButton } from '.';

describe('SubmitButton component', () => {
  it('should renders correctly SubmitButton component', () => {
    const container = renderWithProviders(
      <SubmitButton nameButton="Submit button" isValid submitDisabled={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should renders correctly CircularProgress component', () => {
    renderWithProviders(
      <SubmitButton nameButton="Submit button" isValid submitDisabled />
    );

    const cardDetails = screen.getByTestId('сircular-progress');
    expect(cardDetails).toBeInTheDocument();
  });
});
