export const AUTH_PROVIDERS = {
  LOCAL: 'local',
} as const;

export const USER_FIELDS = {
  EMAIL: 'email',
  UID: 'uid',
} as const;

export const COLLECTIONS = {
  USERS: 'users',
} as const;

export const ERROR = {
  FIREBASE: {
    MESSAGE: 'Error authorization',
    HEADER: 'Firebase Error',
    NOT_FOUND: 'User not found',
  },
} as const;
