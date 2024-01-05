import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { IntrospectionType } from 'graphql';
import { isObjectTypeField } from 'types/predicates';

import { docsDscrSx } from 'components/docs-dscr/style';

import { getViewField } from './helpers/getViewField';

interface DocsDscrProps {
  dscr: string | null;
  links: IntrospectionType[] | null;
  changeValue: (val: string | null) => void;
}

export const DocsDscr = (props: DocsDscrProps) => {
  const files = props.links?.find((item) => item.name === props.dscr);
  const isObjectField = isObjectTypeField(files);

  if (!isObjectField) {
    return false;
  }

  return (
    <Box component="div">
      <Box component="div" sx={docsDscrSx.wrapper}>
        <Button onClick={() => props.changeValue(null)}>
          <Typography variant="subtitle3">{'<'} Docs</Typography>
        </Button>
        <Box component="section" sx={docsDscrSx.titleBlock}>
          <Typography variant="subtitle1">Root</Typography>
        </Box>
        <Typography variant="subtitle3" color="text.secondary">
          Fields
        </Typography>
      </Box>
      <List sx={docsDscrSx.wrapper}>
        {files.fields.map((fieldInfo) => {
          const schema = getViewField(fieldInfo);
          return (
            <ListItem key={fieldInfo.name} sx={docsDscrSx.listItem}>
              <Box component="pre" sx={docsDscrSx.pre}>
                <Typography
                  variant="subtitle3"
                  color="custom.blue"
                  marginRight="8px"
                >
                  {fieldInfo.name}
                </Typography>
                {schema}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
