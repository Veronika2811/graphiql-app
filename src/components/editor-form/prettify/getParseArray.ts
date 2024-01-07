export const getParseArray = (value: string) => {
  const REGEXP_PRETTIFY = /(?=[{}])|(?<=[{}])|(?=[()])|(?<=[()])/g;
  const parseArray = value.split(REGEXP_PRETTIFY);
  return parseArray;
};
