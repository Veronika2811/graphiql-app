import { ErrorFallback } from 'components/error-fallback';

import { renderWithProviders } from '../../renderWithProviders';

import { ErrorBoundary } from '.';

const ChildErrorBoundaryComponent = () => {
  throw new Error('Testing ErrorBoundary component');
};

describe('ErrorBoundary component', () => {
  it('renders correctly ErrorBoundary component', () => {
    const container = renderWithProviders(
      <ErrorBoundary fallback={<ErrorFallback />}>
        Test ErrorBoundary
      </ErrorBoundary>
    );
    expect(container).toMatchSnapshot();
  });

  it('should be displayed ErrorBoundary component', () => {
    const { getByText } = renderWithProviders(
      <ErrorBoundary fallback={<ErrorFallback />}>
        <ChildErrorBoundaryComponent />
      </ErrorBoundary>
    );

    expect(getByText('Oops! Something went wrong!')).toBeInTheDocument();
  });
});
