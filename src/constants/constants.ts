const ROOT = {
  AUTH_FORM: {
    TITLE: 'Welcome',
    TABS: ['Sign In', 'Sign Up'],
  },
  SIGN_IN: {
    BUTTON: 'Sign In',
    LABEL_LOGIN: 'Email',
    LABEL_PASSWORD: 'Password',
    MESSAGE: 'You do not have an account?',
    LINK_TEXT: 'Sign Up',
  },
  SIGN_UP: {
    BUTTON: 'Sign In',
    LABEL_NAME: 'Name',
    LABEL_LOGIN: 'Email',
    LABEL_PASSWORD: 'Password',
    LABEL_CONFIRM_PASSWORD: 'Confirm Password',
    MESSAGE: 'Already have an account?',
    LINK_TEXT: ' Sign In',
  },
};

export default ROOT;

export const ERROR = {
  FIREBASE: {
    MESSAGE: 'Error authorization',
    HEADER: 'Firebase Error',
    NOT_FOUND: 'User not found',
  },
};

export const DIC_ERROR_API = {
  'wrong-password': 'Wrong password',
  'invalid-email': 'Invalid Email',
  'user-disabled': 'User-disabled',
  'user-not-found': 'User not found',
  'email-already-in-use': 'Email already in use',
  'operation-not-allowed': 'Operation not allowed',
  'weak-password': 'Weak-password',
  default: 'Unknown error',
};
