import { combineSxProps } from './utils';

describe('combineSxProps', () => {
  it('combines multiple SxProps into one', () => {
    const sxProps1 = { color: 'red', fontSize: 12 };
    const sxProps2 = { backgroundColor: 'blue' };
    const sxProps3 = { fontSize: 14, lineHeight: 1.5 };

    const result = combineSxProps(sxProps1, sxProps2, sxProps3);

    expect(result).toEqual({
      color: 'red',
      fontSize: 14,
      backgroundColor: 'blue',
      lineHeight: 1.5,
    });
  });

  it('returns an empty object if no SxProps are provided', () => {
    const result = combineSxProps();

    expect(result).toEqual({});
  });
});
