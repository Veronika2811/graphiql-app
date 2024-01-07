import { emailValidation } from './email.validation';

describe('emailValidation', () => {
  it('returns an error if the email is missing', () => {
    expect(() => emailValidation.validateSync(null)).toThrow(
      'yup_required_field'
    );
  });

  it('returns an error if the email is not valid', () => {
    const testValue = 'invalidEmail';

    expect(() => emailValidation.validateSync(testValue)).toThrow(
      'yup_valid_email'
    );
  });

  it('returns an error if the email does not contain a domain name', () => {
    const testValue = 'user@g';

    expect(() => emailValidation.validateSync(testValue)).toThrow(
      'yup_domain_name'
    );
  });

  it('passes validation for a correct email', () => {
    const testValue = 'user@example.com';

    expect(() => emailValidation.validateSync(testValue)).not.toThrow();
  });
});
