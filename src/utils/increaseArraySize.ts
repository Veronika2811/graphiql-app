export const increaseArraySize = <T>(
  arr: T[],
  newSize: number,
  fillValue: T
) => {
  if (arr.length >= newSize) {
    return arr.slice(0, newSize);
  }

  const diff = newSize - arr.length;
  const filledArray = new Array(diff).fill(fillValue);
  return arr.concat(filledArray);
};
