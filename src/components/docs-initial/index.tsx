import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { IntrospectionType } from 'graphql';

import { docsInitialSx } from 'components/docs-initial/style';

interface DocsInitialProps {
  links: IntrospectionType[] | null;
  root: string | null;
  changeQueryDocs: (query: string | null) => void;
}

export const DocsInitial = (props: DocsInitialProps) => (
  <>
    <Box component="section" sx={docsInitialSx.titleBlock}>
      <Typography variant="subtitle1">Docs</Typography>
      <Typography variant="subtitle2">
        A GraphQL schema provides a root type for each kind of operation.
      </Typography>
    </Box>
    <Box component="div" sx={docsInitialSx.wrapper}>
      <Typography variant="subtitle3" color="text.secondary">
        Root types
      </Typography>
      <Box component="div" sx={docsInitialSx.wrapperRoot}>
        <Typography variant="subtitle3" color="custom.blue">
          query:
        </Typography>
        <Button onClick={() => props.changeQueryDocs(props.root)}>
          <Typography variant="subtitle3">Root</Typography>
        </Button>
      </Box>
    </Box>
    <Box component="div">
      <Typography variant="subtitle3" color="text.secondary">
        All Schema Types
      </Typography>
      <List sx={docsInitialSx.list}>
        {props.links?.map((item) => (
          <ListItem sx={docsInitialSx.listItem} key={item.name}>
            {item.name}
          </ListItem>
        ))}
      </List>
    </Box>
  </>
);
