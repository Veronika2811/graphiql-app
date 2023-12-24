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
    LABEL_PASSWORD: 'Password',
    BUTTON: 'Sign In',
  },
  SIGN_UP: {
    TITLE: 'Sign Up',
    MESSAGE: 'Already have an account?',
    LINK_TEXT: ' Sign In',
  },
  SIGN_UP_FORM: {
    LABEL_NAME: 'Name',
    LABEL_LOGIN: 'Email',
    LABEL_PASSWORD: 'Password',
    LABEL_CONFIRM_PASSWORD: 'Confirm Password',
    BUTTON: 'Sign Up',
  },
} as const;

export const ERROR = {
  FIREBASE: {
    MESSAGE: 'Error authorization',
    HEADER: 'Firebase Error',
    NOT_FOUND: 'User not found',
  },
} as const;

export const DIC_ERROR_API = {
  'wrong-password': 'Wrong password',
  'invalid-email': 'Invalid Email',
  'user-disabled': 'User-disabled',
  'user-not-found': 'User not found',
  'email-already-in-use': 'Email already in use',
  'operation-not-allowed': 'Operation not allowed',
  'weak-password': 'Weak-password',
  default: 'Unknown error',
} as const;

export const SUCCESS = {
  SIGN_IN: 'Logged in successfully',
  SIGN_UP: 'Registered successfully',
} as const;
