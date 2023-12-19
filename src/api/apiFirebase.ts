import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

import { User } from '../type/interface';

import { app } from './initFirebase';

interface IFirebaseAuthError {
  code: string;
  message: string;
}

export const auth = getAuth(app);
export const db = getFirestore(app);

export const singIn = async ({ email, password }: User): Promise<undefined> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const firebaseError = error as IFirebaseAuthError;
    console.error('error', firebaseError.code, firebaseError.message);
    throw new Error(firebaseError.code);
  }
};

export const registerUser = async ({
  name,
  email,
  password,
}: User): Promise<undefined> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (error) {
    const firebaseError = error as IFirebaseAuthError;
    console.error('error', firebaseError.code, firebaseError.message);
    throw new Error(firebaseError.code);
  }
};

export const logout = () => {
  signOut(auth);
};

export const getUserName = async (uid: string): Promise<string | undefined> => {
  try {
    const userQuery = query(collection(db, 'users'), where('uid', '==', uid));
    const userQuerySnap = await getDocs(userQuery);
    const userName = userQuerySnap.docs[0].data().name;

    return userName;
  } catch (error) {
    const firebaseError = error as IFirebaseAuthError;
    console.error('error', firebaseError.code, firebaseError.message);
    throw new Error(firebaseError.code);
  }
};

export const checkEmail = async (
  email: string
): Promise<boolean | undefined> => {
  try {
    const userQuery = query(
      collection(db, 'users'),
      where('email', '==', email)
    );
    const userQuerySnap = await getDocs(userQuery);

    return !!userQuerySnap.docs.length;
  } catch (error) {
    const firebaseError = error as IFirebaseAuthError;
    console.error('error', firebaseError.code, firebaseError.message);
    throw new Error(firebaseError.code);
  }
};
