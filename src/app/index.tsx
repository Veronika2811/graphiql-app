import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layouts/default';
import { SuspenseLayout } from 'layouts/suspense';
import { EDITOR, WELCOME } from 'shared/router-path';

const WelcomePage = React.lazy(() => import('pages/welcome'));
const EditorPage = React.lazy(() => import('pages/editor'));
const NotFound = React.lazy(() => import('pages/404'));

export const App = () => (
  <Routes>
    <Route element={<SuspenseLayout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={WELCOME} />} />
        <Route path={WELCOME} element={<WelcomePage />} />
        <Route path={EDITOR} element={<EditorPage />} />
      </Route>
    </Route>
  </Routes>
);
