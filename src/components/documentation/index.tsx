import { Drawer } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { selectScheme } from 'store/selectors';

import { DocsWrapper } from 'components/docs-wrapper';

import { documentationSx } from './style';

export const Documentation = () => {
  const docsInfo = useAppSelector(selectScheme);
  const rootType = docsInfo?.queryType.name ?? null;
  const links =
    docsInfo?.types.filter((item) => !item.name.startsWith('__')) ?? null;
  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: documentationSx.menu,
      }}
    >
      <DocsWrapper links={links} root={rootType} />
    </Drawer>
  );
};
