import { ReactNode, useEffect, useMemo, useState } from 'react';

import { LocaleContext } from './context';
import { REGIONS, TRANSLATION_OBJ } from './locale';

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('lang') || REGIONS.EN
  );
  const [translation, setTranslation] = useState<{ [key: string]: string }>(
    TRANSLATION_OBJ[language]
  );

  useEffect(() => {
    setTranslation(TRANSLATION_OBJ[language]);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      translation,
    }),
    [language, translation]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
