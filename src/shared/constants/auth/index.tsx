import { SIGN_IN, SIGN_UP } from 'shared/router-path';

import { SignInForm } from 'components/auth-sign-in-form';
import { SignUpForm } from 'components/auth-sign-up-form';

// export type PathTabs = {
//   [key in keyof typeof AUTH_TABS]: string;
// };

export const AUTH_TABS_PANEL = [
  <SignInForm key="sign_in" />,
  <SignUpForm key="sign_up" />,
] as const;

export const AUTH_TABS = {
  signIn: 0,
  signUp: 1,
};

export const PATH_TABS = {
  [AUTH_TABS.signIn]: SIGN_IN,
  [AUTH_TABS.signUp]: SIGN_UP,
};
