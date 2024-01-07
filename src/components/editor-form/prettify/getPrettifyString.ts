import { getParseArray } from './getParseArray';
import { getPrettifyValue } from './getPrettifyValue';

export const getPrettifyString = (value: string) => {
  const parseArray = getParseArray(value);
  const prettifyString = getPrettifyValue(parseArray);
  return prettifyString;
};
