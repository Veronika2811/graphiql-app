import { createTheme } from '@mui/material/styles';
import { transitionsCustom } from 'theme/animation';
import { paletteCustom } from 'theme/palette';
import { typographyCustom } from 'theme/typography';

import '@fontsource/source-code-pro';
import '@fontsource/inter';

// https://mui.com/material-ui/customization/default-theme/
// A custom theme for this app

const themeDefault = createTheme({});

export const theme = createTheme({
  palette: paletteCustom,
  typography: typographyCustom(themeDefault),
  transitions: transitionsCustom,
});
