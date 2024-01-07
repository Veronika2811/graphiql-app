import { getDefineSpaceString } from './getDefineSpaceString';

describe('function getDefineSpaceString', () => {
  it('should return a string with spaces', () => {
    expect(getDefineSpaceString(2)).toBe('    ');
  });

  it('should return an empty string', () => {
    expect(getDefineSpaceString(0)).toBe('');
  });
});
