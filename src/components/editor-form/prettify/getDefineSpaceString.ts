export const getDefineSpaceString = (nesting: number) => {
  if (nesting === 0) {
    return '';
  }
  const length = nesting * 2;
  const spaces = Array.from({ length }, () => ' ').join('');
  return spaces;
};
