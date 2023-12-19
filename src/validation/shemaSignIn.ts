import * as Yup from 'yup';

import emailValidation from './rules/email.validation';
import passwordValidation from './rules/password.validation';

const shemaSignIn = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export default shemaSignIn;

export type FormData = Yup.InferType<typeof shemaSignIn>;
