import { findNextText } from './findNextText';

describe('function findNextText', () => {
  it('should returns the next word after the search text if it exists', () => {
    const testString = 'auth/email-already-in-use';

    expect(findNextText(testString, 'auth/')).toBe('email-already-in-use');
  });

  it('should returns an empty string if the search text is not in the input string', () => {
    const testString = 'Hello, my name is John Doe.';

    expect(findNextText(testString, 'auth/')).toBe('');
  });
});
