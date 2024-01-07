import * as Yup from 'yup';

export const passwordValidation = Yup.string()
  .trim()
  .required('yup_required_field')
  .test(
    'uppercase',
    'yup_uppercase_letter',
    (value) => value !== undefined && /[A-Z]/.test(value)
  )
  .test(
    'lowercase',
    'yup_lowercase_letter',
    (value) => value !== undefined && /[a-z]/.test(value)
  )
  .test(
    'digit',
    'yup_digit',
    (value) => value !== undefined && /[0-9]/.test(value)
  )
  .test(
    'specialCharacters',
    'yup_special_character',
    (value) => value !== undefined && /[!@#$%^&*]/.test(value)
  )
  .min(8, 'yup_length_password');
