import { vi } from 'vitest';

import { AUTH_PROVIDERS, ERROR } from './constants/constants';
import AuthService from './apiAuthFirebase';

const mocks = vi.hoisted(() => ({
  createUserWithEmailAndPassword: vi.fn(),
  fetchSignInMethodsForEmail: vi.fn(),
  getAuth: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  addDoc: vi.fn(),
  collection: vi.fn(),
  getFirestore: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: mocks.createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail: mocks.fetchSignInMethodsForEmail,
  getAuth: mocks.getAuth,
  signInWithEmailAndPassword: mocks.signInWithEmailAndPassword,
  signOut: mocks.signOut,
}));

vi.mock('firebase/firestore', () => ({
  addDoc: mocks.addDoc,
  collection: mocks.collection,
  getFirestore: mocks.getFirestore,
}));

describe('AuthService', () => {
  it('.signIn should sign in a user with valid credentials', async () => {
    const user = {
      email: 'test@example.com',
      password: 'password123',
    };

    await AuthService.signIn(user);

    expect(mocks.signInWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      user.email,
      user.password
    );
  });

  it('.signIn should throw an error for invalid credentials', async () => {
    const user = {
      email: 'invalid@example.com',
      password: 'invalidpassword',
    };

    mocks.signInWithEmailAndPassword.mockRejectedValue(
      new Error('Invalid credentials')
    );

    await expect(AuthService.signIn(user)).rejects.toThrowError(
      ERROR.FIREBASE.MESSAGE
    );
  });

  it('.registerUser should register a user with valid details', async () => {
    const user = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };

    mocks.createUserWithEmailAndPassword.mockResolvedValue({
      user: { uid: '123' },
    });
    mocks.addDoc.mockResolvedValue({});

    await AuthService.registerUser(user);

    expect(mocks.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      user.email,
      user.password
    );
    expect(mocks.addDoc).toHaveBeenCalledWith(mocks.collection(), {
      uid: '123',
      name: user.name,
      authProvider: AUTH_PROVIDERS.LOCAL,
      email: user.email,
    });
  });

  it('.registerUser should throw an error for registration failure', async () => {
    const user = {
      name: 'Invalid User',
      email: 'invalid@example.com',
      password: 'invalidpassword',
    };

    mocks.createUserWithEmailAndPassword.mockRejectedValue(
      new Error('Registration failed')
    );

    await expect(AuthService.registerUser(user)).rejects.toThrowError(
      ERROR.FIREBASE.MESSAGE
    );
  });

  it('.checkEmail should return true for existing email', async () => {
    const email = 'existing@example.com';

    mocks.fetchSignInMethodsForEmail.mockResolvedValue(['password']);

    const result = await AuthService.checkEmail(email);

    expect(result).toBe(true);
  });

  it('.checkEmail should return false for non-existing email', async () => {
    const email = 'nonexisting@example.com';

    mocks.fetchSignInMethodsForEmail.mockResolvedValue([]);

    const result = await AuthService.checkEmail(email);

    expect(result).toBe(false);
  });

  it('.checkEmail should throw an error for check email failure', async () => {
    const email = 'invalid@example.com';

    mocks.fetchSignInMethodsForEmail.mockRejectedValue(
      new Error('Check email failed')
    );

    await expect(AuthService.checkEmail(email)).rejects.toThrowError(
      ERROR.FIREBASE.MESSAGE
    );
  });

  it('.logout should call signOut method', () => {
    AuthService.logout();

    expect(mocks.signOut).toHaveBeenCalledTimes(1);
  });
});
