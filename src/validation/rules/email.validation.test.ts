import { emailValidation } from './email.validation';

describe('emailValidation', () => {
  it('returns an error if the email is missing', () => {
    expect(() => emailValidation.validateSync(null)).toThrow(
      'Email is required'
    );
  });

  it('returns an error if the email is not valid', () => {
    const testValue = 'invalidEmail';

    expect(() => emailValidation.validateSync(testValue)).toThrow(
      'Enter a valid email (e.g., user@example.com)'
    );
  });

  it('returns an error if the email does not contain a domain name', () => {
    const testValue = 'user@g';

    expect(() => emailValidation.validateSync(testValue)).toThrow(
      'Email address must contain a domain name'
    );
  });

  it('passes validation for a correct email', () => {
    const testValue = 'user@example.com';

    expect(() => emailValidation.validateSync(testValue)).not.toThrow();
  });
});
