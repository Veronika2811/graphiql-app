import { shemaSignIn } from './shemaSignIn';

describe('shemaSignIn', () => {
  it('returns an error if the email or password is missing', () => {
    const testValue = { email: '', password: '' };

    expect(() => shemaSignIn.validateSync(testValue)).toThrow();
  });

  it('returns an error if the email is not valid', () => {
    const testValue = { email: 'invalidEmail', password: 'Abc12345!' };

    expect(() => shemaSignIn.validateSync(testValue)).toThrow();
  });

  it('returns an error if the password is not valid', () => {
    const testValue = { email: 'user@example.com', password: 'abc' };

    expect(() => shemaSignIn.validateSync(testValue)).toThrow();
  });

  it('passes validation for a correct email and password', () => {
    const testValue = { email: 'user@example.com', password: 'Abc12345!' };

    expect(() => shemaSignIn.validateSync(testValue)).not.toThrow();
  });
});
