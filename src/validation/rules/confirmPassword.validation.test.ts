import * as Yup from 'yup';

import { confirmPasswordValidation } from './confirmPassword.validation';

describe('validation rule confirmPasswordValidation', () => {
  it('should returns an error if the confirmation password is missing', () => {
    const testValue = { password: 'Abc12345!', confirmPassword: null };

    expect(() =>
      Yup.object({
        password: Yup.string(),
        confirmPassword: confirmPasswordValidation,
      }).validateSync(testValue)
    ).toThrow('yup_required_field');
  });

  it('should returns an error if the confirmation password does not match the password', () => {
    const testValue = { password: 'Abc12345!', confirmPassword: 'Abc12345' };

    expect(() =>
      Yup.object({
        password: Yup.string(),
        confirmPassword: confirmPasswordValidation,
      }).validateSync(testValue)
    ).toThrow('yup_password_mismatch');
  });

  it('should passes validation if the confirmation password matches the password', () => {
    const testValue = { password: 'Abc12345!', confirmPassword: 'Abc12345!' };

    expect(() =>
      Yup.object({
        password: Yup.string(),
        confirmPassword: confirmPasswordValidation,
      }).validateSync(testValue)
    ).not.toThrow();
  });
});
