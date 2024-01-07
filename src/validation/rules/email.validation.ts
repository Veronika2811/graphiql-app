import * as Yup from 'yup';

export const emailValidation = Yup.string()
  .trim()
  .required('yup_required_field')
  .email('yup_valid_email')
  .matches(/^.+@.+\..+$/, 'yup_domain_name');
