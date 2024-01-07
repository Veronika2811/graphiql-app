import { createContext } from 'react';

import { REGIONS, TRANSLATION_OBJ } from './locale';

export type LocaleContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translation: { [key: string]: string };
};

export const LocaleContext = createContext<LocaleContextType>({
  language: REGIONS.EN,
  setLanguage: () => {},
  translation: TRANSLATION_OBJ[REGIONS.EN],
});
