import { FirebaseApp, FirebaseError } from 'firebase/app';
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

import { ERROR } from '../constants/constants';

import { COLLECTIONS, USER_FIELDS } from './constants/constants';

export default class DataBaseService {
  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);
  }

  getUserName = async (uid: string): Promise<string | void> => {
    try {
      const userQuery = query(
        collection(this.db, COLLECTIONS.USERS),
        where(USER_FIELDS.UID, '==', uid)
      );
      const userQuerySnap = await getDocs(userQuery);

      if (!userQuerySnap.docs.length) {
        throw new Error(ERROR.FIREBASE.NOT_FOUND);
      }

      const userName = userQuerySnap.docs[0].data().name;

      return userName;
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(
          `${ERROR.FIREBASE.HEADER}: ${error.code} - ${error.message}`
        );
      }
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error(ERROR.FIREBASE.MESSAGE);
    }
  };
}
