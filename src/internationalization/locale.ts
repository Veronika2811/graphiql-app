import { englishDictionary } from './locales/en';
import { russianDictionary } from './locales/ru';

export const REGIONS = {
  RU: 'RU',
  EN: 'EN',
};

export const TRANSLATION_OBJ = {
  [REGIONS.EN]: englishDictionary,
  [REGIONS.RU]: russianDictionary,
};
