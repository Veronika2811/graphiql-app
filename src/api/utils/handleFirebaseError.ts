import { FirebaseError } from 'firebase/app';

import { ERROR } from '../../constants/constants';

export const handleFirebaseError = (error: unknown) => {
  if (error instanceof FirebaseError) {
    throw new Error(
      `${ERROR.FIREBASE.HEADER}: ${error.code} - ${error.message}`
    );
  }
  throw new Error(ERROR.FIREBASE.MESSAGE);
};
