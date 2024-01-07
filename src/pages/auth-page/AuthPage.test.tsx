import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'context/snackbar-provider';
import { REGIONS, TRANSLATION_OBJ } from 'internationalization/locale';
import { LocaleContext } from 'internationalization/LocaleContext';
import { vi } from 'vitest';

import AuthPage from '.';

describe('AuthPage page', () => {
  it('renders correctly AuthPage', () => {
    const container = render(
      <HashRouter>
        <SnackbarProvider>
          <LocaleContext.Provider
            value={{
              language: REGIONS.EN,
              setLanguage: vi.fn(),
              translation: TRANSLATION_OBJ[REGIONS.EN],
            }}
          >
            <AuthPage />
          </LocaleContext.Provider>
        </SnackbarProvider>
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
