export const findNextText = (
  inputString: string,
  searchText: string
): string => {
  if (inputString && searchText) {
    const regex = new RegExp(`${searchText}([^ ]+)`);
    const match = inputString.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }

  return '';
};
