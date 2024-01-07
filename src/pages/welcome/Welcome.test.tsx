import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { REGIONS, TRANSLATION_OBJ } from 'internationalization/locale';
import { LocaleContext } from 'internationalization/LocaleContext';
import { vi } from 'vitest';

import WelcomePage from '.';

describe('WelcomePage page', () => {
  it('renders correctly WelcomePage', () => {
    const container = render(
      <HashRouter>
        <LocaleContext.Provider
          value={{
            language: REGIONS.EN,
            setLanguage: vi.fn(),
            translation: TRANSLATION_OBJ[REGIONS.EN],
          }}
        >
          <WelcomePage />
        </LocaleContext.Provider>
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
