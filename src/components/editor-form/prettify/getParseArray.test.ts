import { getParseArray } from './getParseArray';

describe('function getParseArray', () => {
  it('should make an array from a string', () => {
    expect(getParseArray('{charatcrers{}}')).toEqual([
      '{',
      'charatcrers',
      '{',
      '}',
      '}',
    ]);
  });
});
