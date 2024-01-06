import { increaseArraySize } from './increaseArraySize';

describe('increaseArraySize', () => {
  it('increases the size of the array and fills with the specified value', () => {
    const arr = [1, 2, 3];
    const newSize = 5;
    const fillValue = 0;

    const result = increaseArraySize(arr, newSize, fillValue);

    expect(result).toEqual([1, 2, 3, 0, 0]);
  });

  it('decreases the size of the array if the new size is smaller', () => {
    const arr = [1, 2, 3, 4, 5];
    const newSize = 3;

    const result = increaseArraySize(arr, newSize, 0);

    expect(result).toEqual([1, 2, 3]);
  });

  it('returns the same array if the new size is equal to the current size', () => {
    const arr = [1, 2, 3];
    const newSize = 3;

    const result = increaseArraySize(arr, newSize, 0);

    expect(result).toEqual([1, 2, 3]);
  });
});
