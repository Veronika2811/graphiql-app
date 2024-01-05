import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { IntrospectionType } from 'graphql';
import { useLocale } from 'internationalization/useLocale';

import { docsInitialSx } from 'components/docs-initial/style';
import { DocsTitle } from 'components/docs-title';

interface DocsInitialProps {
  links: IntrospectionType[] | null;
  root: string | null;
  changeQueryDocs: (query: string | null) => void;
}

export const DocsInitial = ({
  links,
  root,
  changeQueryDocs,
}: DocsInitialProps) => {
  const { translation } = useLocale();

  const onChangeQueryDocs = () => changeQueryDocs(root);

  return (
    <>
      <DocsTitle />

      <Box component="div" display="flex" flexDirection="column" gap={1}>
        <Typography variant="subtitle2" color="secondary">
          {translation.docs_root_types}
        </Typography>
        <Box component="div" sx={docsInitialSx.wrapperRoot}>
          <Typography variant="subtitle2">{translation.docs_query}:</Typography>
          <Button onClick={onChangeQueryDocs}>
            <Typography variant="subtitle2">{translation.docs_root}</Typography>
          </Button>
        </Box>
      </Box>
      <Box component="div">
        <Typography variant="subtitle2" color="text.secondary">
          {translation.docs_all_schema}
        </Typography>
        <List sx={docsInitialSx.list}>
          {links?.map((item) => (
            <ListItem sx={docsInitialSx.listItem} key={item.name}>
              {item.name}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
