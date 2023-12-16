import { createTheme } from '@mui/material/styles';
import { transitionsCustom } from 'theme/animation';
import { paletteCustom } from 'theme/palette';
import { typographyCustom } from 'theme/typography';

import '@fontsource/source-code-pro';
import '@fontsource/inter';

export const theme = createTheme({
  palette: paletteCustom,
  typography: typographyCustom,
  transitions: transitionsCustom,
});
