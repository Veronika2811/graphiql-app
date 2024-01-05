import { Drawer } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { selectSchema, selectStateDocsDrawer } from 'store/selectors';

import { DocsWrapper } from 'components/docs-wrapper';

import { documentationSx } from './style';

export const Documentation = () => {
  const docsOpen = useAppSelector(selectStateDocsDrawer);
  const docsInfo = useAppSelector(selectSchema);

  const rootType = docsInfo?.queryType.name ?? null;

  const links =
    docsInfo?.types.filter((item) => !item.name.startsWith('__')) ?? null;

  return (
    <Drawer
      variant="permanent"
      open={docsOpen}
      PaperProps={{
        sx: documentationSx.menu,
      }}
    >
      <DocsWrapper root={rootType} links={links} />
    </Drawer>
  );
};
