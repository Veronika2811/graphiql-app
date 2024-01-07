import { ERROR } from 'api/constants/constants';
import { FirebaseError } from 'firebase/app';

import { handleFirebaseError } from './handleFirebaseError';

describe('utils function handleFirebaseError', () => {
  it('should throw an error with Firebase error header and message', () => {
    const firebaseError = new FirebaseError('code', 'Firebase error message');
    expect(() => {
      handleFirebaseError(firebaseError);
    }).toThrow(`${ERROR.FIREBASE.HEADER}: code - Firebase error message`);
  });

  it('should throw a generic Firebase error message for non-Firebase errors', () => {
    const nonFirebaseError = new Error('Some other error');
    expect(() => {
      handleFirebaseError(nonFirebaseError);
    }).toThrow(ERROR.FIREBASE.MESSAGE);
  });
});
