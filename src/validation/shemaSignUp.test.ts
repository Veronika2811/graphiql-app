import { shemaSignUp } from './shemaSignUp';

describe('shemaSignUp', () => {
  it('returns an error if any field is missing', () => {
    const testValue = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow();
  });

  it('returns an error if the name is not valid', () => {
    const testValue = {
      name: 'john',
      email: 'user@example.com',
      password: 'Abc12345!',
      confirmPassword: 'Abc12345!',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow();
  });

  it('returns an error if the email is not valid', () => {
    const testValue = {
      name: 'John',
      email: 'invalidEmail',
      password: 'Abc12345!',
      confirmPassword: 'Abc12345!',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow();
  });

  it('returns an error if the password is not valid', () => {
    const testValue = {
      name: 'John',
      email: 'user@example.com',
      password: 'abc',
      confirmPassword: 'abc',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow();
  });

  it('returns an error if the confirmation password does not match the password', () => {
    const testValue = {
      name: 'John',
      email: 'user@example.com',
      password: 'Abc12345!',
      confirmPassword: 'Abc12345',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow();
  });

  it('passes validation for correct inputs', () => {
    const testValue = {
      name: 'John',
      email: 'user@example.com',
      password: 'Abc12345!',
      confirmPassword: 'Abc12345!',
    };

    expect(() => shemaSignUp.validateSync(testValue)).not.toThrow();
  });

  it('returns an error if the name is missing', () => {
    const testValue = {
      name: null,
      email: 'user@example.com',
      password: 'Abc12345!',
      confirmPassword: 'Abc12345!',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow(
      'yup_required_field'
    );
  });

  it('returns an error if the name is empty', () => {
    const testValue = {
      name: '',
      email: 'user@example.com',
      password: 'Abc12345!',
      confirmPassword: 'Abc12345!',
    };

    expect(() => shemaSignUp.validateSync(testValue)).toThrow(
      'yup_required_field'
    );
  });
});
