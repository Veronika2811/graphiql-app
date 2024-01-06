import { useEffect, useState } from 'react';
import { REGIONS } from 'internationalization/locale';

export const useStoredLanguage = () => {
  const getInitialLanguage = () => localStorage.getItem('lang') || REGIONS.EN;

  const [language, setLanguage] = useState<string>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  return [language, setLanguage] as const;
};
