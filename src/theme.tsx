import { createTheme } from '@mui/material/styles';

import '@fontsource/source-code-pro';
import '@fontsource/inter';

import { transitionsCustom } from './theme/animation';
import { paletteCustom } from './theme/palette';
import { typographyCustom } from './theme/typography';

// https://mui.com/material-ui/customization/default-theme/
// A custom theme for this app
// let theme = createTheme({});

const themeOld = createTheme({});

const theme = createTheme({
  palette: paletteCustom,
  typography: typographyCustom(themeOld),
  transitions: transitionsCustom,
});

export default theme;
