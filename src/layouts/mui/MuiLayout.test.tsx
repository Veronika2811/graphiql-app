import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { REGIONS, TRANSLATION_OBJ } from 'internationalization/locale';
import { LocaleContext } from 'internationalization/LocaleContext';
import { vi } from 'vitest';

import { MuiProvider } from '.';

describe('LayoutMui component', () => {
  it('renders correctly LayoutMui', () => {
    const container = render(
      <HashRouter>
        <LocaleContext.Provider
          value={{
            language: REGIONS.EN,
            setLanguage: vi.fn(),
            translation: TRANSLATION_OBJ[REGIONS.EN],
          }}
        >
          <MuiProvider>Test LayoutMui</MuiProvider>
        </LocaleContext.Provider>
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
