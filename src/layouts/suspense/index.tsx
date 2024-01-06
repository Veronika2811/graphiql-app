import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingFallback } from 'components/loading-fallback';

export const SuspenseLayout = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Outlet />
  </Suspense>
);
