import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Fallback } from 'components/fallback';

export const SuspenseLayout = () => (
  <Suspense fallback={<Fallback />}>
    <Outlet />
  </Suspense>
);
