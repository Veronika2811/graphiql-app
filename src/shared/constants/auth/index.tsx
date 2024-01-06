import { SignInForm } from 'components/auth-sign-in-form';
import { SignUpForm } from 'components/auth-sign-up-form';

export const AUTH_TABS_PANEL = [
  <SignInForm key="sign_in" />,
  <SignUpForm key="sign_up" />,
];

export const AUTH_TABS = {
  signIn: 0,
  signUp: 1,
};
