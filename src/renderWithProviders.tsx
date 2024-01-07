import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render, type RenderOptions } from '@testing-library/react';
import { SnackbarProvider } from 'context/snackbar-provider';
import { LocaleProvider } from 'internationalization/LocaleProvider';
import { MuiProvider } from 'layouts/mui';
import { AppStore, setupStore } from 'store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => (
    <MuiProvider>
      <SnackbarProvider>
        <HashRouter>
          <Provider store={store}>
            <LocaleProvider>{children}</LocaleProvider>
          </Provider>
        </HashRouter>
      </SnackbarProvider>
    </MuiProvider>
  );
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
