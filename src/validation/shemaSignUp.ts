import * as Yup from 'yup';

import { checkEmail } from '../api/apiFirebase';

import confirmPasswordValidation from './rules/confirmPassword.validation';
import emailValidation from './rules/email.validation';
import nameValidation from './rules/name.validation';
import passwordValidation from './rules/password.validation';

const shemaSignUp = Yup.object().shape({
  name: nameValidation,
  email: emailValidation.test(
    'email-present',
    'This email is already registered',
    async (value) => {
      if (value) {
        const isUnique = await checkEmail(value);
        return !isUnique;
      }
      return true;
    }
  ),
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export default shemaSignUp;

export type FormData = Yup.InferType<typeof shemaSignUp>;
