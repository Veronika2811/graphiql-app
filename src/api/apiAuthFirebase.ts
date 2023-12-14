import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

import { ERROR } from '../constants/constants';
import { User } from '../type/interface';

import { AUTH_PROVIDERS, COLLECTIONS } from './constants/constants';
import { app } from './initFirebase';

export const auth = getAuth(app);
export const db = getFirestore(app);

export const singIn = async ({ email, password }: User): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.code);
    }
    throw new Error(ERROR.FIREBASE.MESSAGE);
  }
};

export const registerUser = async ({
  name,
  email,
  password,
}: User): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, COLLECTIONS.USERS), {
      uid: user.uid,
      name,
      authProvider: AUTH_PROVIDERS.LOCAL,
      email,
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.code);
    }
    throw new Error(ERROR.FIREBASE.MESSAGE);
  }
};

export const logout = () => {
  signOut(auth);
};
