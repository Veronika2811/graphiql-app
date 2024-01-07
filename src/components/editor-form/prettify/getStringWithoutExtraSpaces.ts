export const getStringWithoutExtraSpaces = (line: string) => {
  const result = line
    .split(' ')
    .filter((item) => item)
    .join(' ');
  return result;
};
