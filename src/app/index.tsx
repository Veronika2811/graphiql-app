import { lazy } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth } from 'api/initFirebase';
import { SnackbarProvider } from 'context/snackbar-provider';
import { Layout } from 'layouts/default';
import { SuspenseLayout } from 'layouts/suspense';
import { AUTH, EDITOR, WELCOME } from 'shared/router-path';

const WelcomePage = lazy(() => import('pages/welcome'));
const AuthPage = lazy(() => import('pages/auth-page'));
const EditorPage = lazy(() => import('pages/editor'));
const NotFoundPage = lazy(() => import('pages/404'));

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <SnackbarProvider>
      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to={WELCOME} />} />
            <Route path={WELCOME} element={<WelcomePage />} />
            <Route
              path={EDITOR}
              element={user ? <EditorPage /> : <Navigate to={AUTH} replace />}
            />
            <Route
              path={AUTH}
              element={user ? <Navigate to={EDITOR} replace /> : <AuthPage />}
            />
          </Route>
        </Route>
      </Routes>
    </SnackbarProvider>
  );
};
