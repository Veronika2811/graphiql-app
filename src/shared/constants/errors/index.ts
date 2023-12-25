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
