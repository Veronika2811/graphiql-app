import { ERROR } from 'api/constants/constants';
import { FirebaseError } from 'firebase/app';

import { handleFirebaseError } from './handleFirebaseError';

describe('handleFirebaseError', () => {
  it('should throw an error with Firebase error header and message', () => {
    const firebaseError = new FirebaseError('code', 'Firebase error message');
    expect(() => {
      handleFirebaseError(firebaseError);
    }).toThrowError(`${ERROR.FIREBASE.HEADER}: code - Firebase error message`);
  });

  it('should throw a generic Firebase error message for non-Firebase errors', () => {
    const nonFirebaseError = new Error('Some other error');
    expect(() => {
      handleFirebaseError(nonFirebaseError);
    }).toThrowError(ERROR.FIREBASE.MESSAGE);
  });
});
