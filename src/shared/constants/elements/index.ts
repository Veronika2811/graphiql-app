export const ROOT = {
  AUTH_FORM: {
    TITLE: 'Welcome',
    TABS: ['Sign In', 'Sign Up'],
  },
  SIGN_IN: {
    TITLE: 'Sign In',
    MESSAGE: 'You do not have an account?',
    LINK_TEXT: 'Sign Up',
  },
  SIGN_IN_FORM: {
    LABEL_LOGIN: 'Email',
    FILED_LOGIN: 'email',
    LABEL_PASSWORD: 'Password',
    FILED_PASSWORD: 'password',
    BUTTON: 'Sign In',
  },
  SIGN_UP: {
    TITLE: 'Sign Up',
    MESSAGE: 'Already have an account?',
    LINK_TEXT: ' Sign In',
  },
  SIGN_UP_FORM: {
    LABEL_NAME: 'Name',
    FILED_NAME: 'name',
    LABEL_LOGIN: 'Email',
    FILED_LOGIN: 'email',
    LABEL_PASSWORD: 'Password',
    FILED_PASSWORD: 'password',
    LABEL_CONFIRM_PASSWORD: 'Confirm Password',
    FILED_CONFIRM_PASSWORD: 'confirmPassword',
    BUTTON: 'Sign Up',
  },
} as const;
