import { ERROR } from 'constants/index';
import { FirebaseError } from 'firebase/app';

export const handleFirebaseError = (error: unknown) => {
  if (error instanceof FirebaseError) {
    throw new Error(
      `${ERROR.FIREBASE.HEADER}: ${error.code} - ${error.message}`
    );
  }
  throw new Error(ERROR.FIREBASE.MESSAGE);
};
