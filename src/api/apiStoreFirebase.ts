import { FirebaseError } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

import { ERROR } from '../constants/constants';

import { COLLECTIONS, USER_FIELDS } from './constants/constants';
import { app } from './initFirebase';

export const auth = getAuth(app);
export const db = getFirestore(app);

export const getUserName = async (uid: string): Promise<string | void> => {
  try {
    const userQuery = query(
      collection(db, COLLECTIONS.USERS),
      where(USER_FIELDS.UID, '==', uid)
    );
    const userQuerySnap = await getDocs(userQuery);
    const userName = userQuerySnap.docs[0].data().name;

    return userName;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.code);
    }
    throw new Error(ERROR.FIREBASE.MESSAGE);
  }
};

export const checkEmail = async (email: string): Promise<boolean | void> => {
  try {
    const userQuery = query(
      collection(db, COLLECTIONS.USERS),
      where(USER_FIELDS.EMAIL, '==', email)
    );
    const userQuerySnap = await getDocs(userQuery);

    return !!userQuerySnap.docs.length;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.code);
    }
    throw new Error(ERROR.FIREBASE.MESSAGE);
  }
};
