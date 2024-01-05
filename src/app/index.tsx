import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layouts/default';
import { SuspenseLayout } from 'layouts/suspense';
import { AUTH, EDITOR, WELCOME } from 'shared/router-path';

import { SnackbarProvider } from 'components/SnackbarProvider';

const WelcomePage = React.lazy(() => import('pages/welcome'));
const AuthPage = React.lazy(() => import('pages/auth'));
const EditorPage = React.lazy(() => import('pages/editor'));
const NotFoundPage = React.lazy(() => import('pages/404'));

export const App = () => (
  <SnackbarProvider>
    <Routes>
      <Route element={<SuspenseLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={WELCOME} />} />
          <Route path={WELCOME} element={<WelcomePage />} />
          <Route path={EDITOR} element={<EditorPage />} />
          <Route path={AUTH} element={<AuthPage />} />
        </Route>
      </Route>
    </Routes>
  </SnackbarProvider>
);
