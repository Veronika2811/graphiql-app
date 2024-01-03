import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layouts/default';
import { SuspenseLayout } from 'layouts/suspense';
import { AUTH, EDITOR, SIGN_IN, SIGN_UP, WELCOME } from 'shared/router-path';

import { SnackbarProvider } from 'components/SnackbarProvider';

const WelcomePage = React.lazy(() => import('pages/welcome'));
const EditorPage = React.lazy(() => import('pages/editor'));
const NotFound = React.lazy(() => import('pages/404'));
const AuthPage = React.lazy(() => import('pages/Auth'));
const SignInPage = React.lazy(() => import('pages/SignIn'));
const SignUpPage = React.lazy(() => import('pages/SignUp'));

export const App = () => (
  <SnackbarProvider>
    <Routes>
      <Route element={<SuspenseLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={WELCOME} />} />
          <Route path={WELCOME} element={<WelcomePage />} />
          <Route path={EDITOR} element={<EditorPage />} />
          <Route path={AUTH} element={<AuthPage />} />
          <Route path={SIGN_IN} element={<SignInPage />} />
          <Route path={SIGN_UP} element={<SignUpPage />} />
        </Route>
      </Route>
    </Routes>
  </SnackbarProvider>
);
