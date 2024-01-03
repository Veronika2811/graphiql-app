import * as Yup from 'yup';

export const confirmPasswordValidation: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
> = Yup.string()
  .oneOf([Yup.ref('password'), ''], 'Passwords must match')
  .required('Password confirmation is required');
