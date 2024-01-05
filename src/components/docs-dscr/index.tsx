import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { IntrospectionNamedTypeRef, IntrospectionType } from 'graphql';
import { useLocale } from 'internationalization/useLocale';
import { isObjectTypeField } from 'types/predicates';

import { docsDscrSx } from 'components/docs-dscr/style';

import { getViewField } from './helpers/getViewField';

interface DocsDscrProps {
  description: string | null;
  links: IntrospectionType[] | null;
  changeValue: (val: string | null) => void;
}

export const DocsDscr = ({
  description,
  links,
  changeValue,
}: DocsDscrProps) => {
  const { translation } = useLocale();

  const files = links?.find((item) => item.name === description);
  const isObjectField = isObjectTypeField(files);

  if (!isObjectField) return false;

  const onChangeValue = () => changeValue(null);

  return (
    <Box component="div">
      <Box component="div" sx={docsDscrSx.wrapper}>
        <Button onClick={onChangeValue}>
          <Typography variant="subtitle2">
            {'<'} {translation.docs}
          </Typography>
        </Button>
        <Box component="section" sx={docsDscrSx.titleBlock}>
          <Typography variant="subtitle1">{translation.docs_root}</Typography>
        </Box>
        <Typography variant="subtitle2" color="text.secondary">
          {translation.docs_fields}
        </Typography>
      </Box>
      <List sx={docsDscrSx.wrapper}>
        {files.fields.map((fieldInfo) => {
          const schema = getViewField(fieldInfo);

          const type = fieldInfo.type as IntrospectionNamedTypeRef;

          return (
            <ListItem key={fieldInfo.name} sx={docsDscrSx.listItem}>
              <Typography variant="subtitle2" color="custom.blue">
                {fieldInfo.name}
              </Typography>
              <Typography variant="subtitle2">{schema}</Typography>
              <Typography variant="subtitle2" color="secondary.main">
                {type.name ? `:${type.name}` : ''}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
