import * as Yup from 'yup';

export const emailValidation: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
> = Yup.string()
  .trim()
  .email('Enter a valid email (e.g., user@example.com)')
  .matches(/^.+@.+\..+$/, 'Email address must contain a domain name')
  .required('Email is required');
