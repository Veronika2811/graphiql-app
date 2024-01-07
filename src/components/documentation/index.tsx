import React, { Suspense } from 'react';
import { CircularProgress, Drawer } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectStateDocsDrawer } from 'store/selectors';
import { setStateDocsDrawer } from 'store/slices/documentation';

import { documentationSx } from './style';

const DocsWrapper = React.lazy(() => import('components/docs-wrapper'));

export const Documentation = () => {
  const docsOpen = useAppSelector(selectStateDocsDrawer);
  const dispatch = useAppDispatch();

  const onCloseDrawer = () => dispatch(setStateDocsDrawer(false));

  return (
    <Drawer
      variant="temporary"
      open={docsOpen}
      PaperProps={{
        sx: documentationSx.menu,
      }}
      onClose={onCloseDrawer}
    >
      <Suspense fallback={<CircularProgress color="secondary" size={100} />}>
        <DocsWrapper />
      </Suspense>
    </Drawer>
  );
};
