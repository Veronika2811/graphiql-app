import { createTheme } from '@mui/material/styles';
import { transitionsCustom } from 'theme/animation';
import { paletteCustom } from 'theme/palette';
import { typographyCustom } from 'theme/typography';

import '@fontsource/source-code-pro';
import '@fontsource/inter';

import { componentsCustom } from './theme/components';

const defaultTheme = createTheme({});

export const theme = createTheme({
  palette: paletteCustom,
  typography: typographyCustom(defaultTheme),
  transitions: transitionsCustom,
  components: componentsCustom,
});
