import { createContext } from 'react';

export type LocaleContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translation: { [key: string]: string };
};

export const LocaleContext = createContext<LocaleContextType>(null!);
