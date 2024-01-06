import * as Yup from 'yup';

import { confirmPasswordValidation } from './confirmPassword.validation';

describe('confirmPasswordValidation', () => {
  it('returns an error if the confirmation password is missing', () => {
    const testValue = { password: 'Abc12345!', confirmPassword: null };

    expect(() =>
      Yup.object({
        password: Yup.string(),
        confirmPassword: confirmPasswordValidation,
      }).validateSync(testValue)
    ).toThrow('Password confirmation is required');
  });

  it('returns an error if the confirmation password does not match the password', () => {
    const testValue = { password: 'Abc12345!', confirmPassword: 'Abc12345' };

    expect(() =>
      Yup.object({
        password: Yup.string(),
        confirmPassword: confirmPasswordValidation,
      }).validateSync(testValue)
    ).toThrow('Passwords must match');
  });

  it('passes validation if the confirmation password matches the password', () => {
    const testValue = { password: 'Abc12345!', confirmPassword: 'Abc12345!' };

    expect(() =>
      Yup.object({
        password: Yup.string(),
        confirmPassword: confirmPasswordValidation,
      }).validateSync(testValue)
    ).not.toThrow();
  });
});
