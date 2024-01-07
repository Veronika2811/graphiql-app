import * as Yup from 'yup';

export const confirmPasswordValidation = Yup.string()
  .required('yup_required_field')
  .oneOf([Yup.ref('password'), ''], 'yup_password_mismatch');
