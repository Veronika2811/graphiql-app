import { FirebaseApp, FirebaseError } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
} from 'firebase/firestore';

import { ERROR } from '../constants/constants';
import { User } from '../type/interface';

import { AUTH_PROVIDERS, COLLECTIONS } from './constants/constants';

export default class AuthService {
  private auth: Auth;

  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }

  signIn = async ({ email, password }: User): Promise<void> => {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(
          `${ERROR.FIREBASE.HEADER}: ${error.code} - ${error.message}`
        );
      }
      throw new Error(ERROR.FIREBASE.MESSAGE);
    }
  };

  registerUser = async ({ name, email, password }: User): Promise<void> => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const { user } = res;
      await addDoc(collection(this.db, COLLECTIONS.USERS), {
        uid: user.uid,
        name,
        authProvider: AUTH_PROVIDERS.LOCAL,
        email,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(`${ERROR.FIREBASE}: ${error.code} - ${error.message}`);
      }
      throw new Error(ERROR.FIREBASE.MESSAGE);
    }
  };

  checkEmail = async (email: string): Promise<boolean | void> => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(this.auth, email);
      return !!signInMethods.length;
    } catch (error) {
      if (error instanceof FirebaseError) {
        throw new Error(
          `${ERROR.FIREBASE.HEADER}: ${error.code} - ${error.message}`
        );
      }
      throw new Error(ERROR.FIREBASE.MESSAGE);
    }
  };

  logout = () => {
    signOut(this.auth);
  };
}
