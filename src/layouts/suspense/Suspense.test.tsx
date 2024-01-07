import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { REGIONS, TRANSLATION_OBJ } from 'internationalization/locale';
import { LocaleContext } from 'internationalization/LocaleContext';
import { vi } from 'vitest';

import { SuspenseLayout } from '.';

describe('SuspenseLayout component', () => {
  it('renders correctly SuspenseLayout', () => {
    const container = render(
      <HashRouter>
        <LocaleContext.Provider
          value={{
            language: REGIONS.EN,
            setLanguage: vi.fn(),
            translation: TRANSLATION_OBJ[REGIONS.EN],
          }}
        >
          <SuspenseLayout />
        </LocaleContext.Provider>
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
