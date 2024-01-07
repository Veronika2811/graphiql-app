import { FirebaseApp } from 'firebase/app';
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

import { User } from '../types/interface';

import { AUTH_PROVIDERS, COLLECTIONS } from './constants/constants';
import { handleFirebaseError } from './utils/handleFirebaseError';
import { app as appFB } from './initFirebase';

class AuthService {
  private auth: Auth;

  private db: Firestore;

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }

  signIn = async ({ email, password }: User) => {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      handleFirebaseError(error);
    }
  };

  registerUser = async ({ name, email, password }: User) => {
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
      handleFirebaseError(error);
    }
  };

  checkEmail = async (email: string) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(this.auth, email);

      if (signInMethods.length) {
        return true;
      }

      return false;
    } catch (error) {
      handleFirebaseError(error);

      return false;
    }
  };

  logout = () => {
    signOut(this.auth);
  };
}

export default new AuthService(appFB);
