import * as Yup from 'yup';

import { emailValidation } from './rules/email.validation';
import { passwordValidation } from './rules/password.validation';

export const shemaSignIn = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export type FormData = Yup.InferType<typeof shemaSignIn>;
