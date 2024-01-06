import { passwordValidation } from './password.validation';

describe('passwordValidation', () => {
  it('returns an error for a short password', () => {
    const testValue = 'Ab!12';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'yup_length_password'
    );
  });

  it('returns an error if the password does not contain an uppercase letter', () => {
    const testValue = 'abc12345';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'yup_uppercase_letter'
    );
  });

  it('returns an error if the password does not contain a lowercase letter', () => {
    const testValue = 'ABC12345';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'yup_lowercase_letter'
    );
  });

  it('returns an error if the password does not contain a digit', () => {
    const testValue = 'Abcdefgh';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'yup_digit'
    );
  });

  it('returns an error if the password does not contain a special character', () => {
    const testValue = 'Abc123456';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'yup_special_character'
    );
  });

  it('returns an error if the password is missing', () => {
    expect(() => passwordValidation.validateSync(null)).toThrow(
      'yup_required_field'
    );
  });

  it('passes validation for a correct password', () => {
    const testValue = 'Abc12345!';

    expect(() => passwordValidation.validateSync(testValue)).not.toThrow();
  });
});
