import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    code?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    code?: React.CSSProperties;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    huge: true;
    miniHuge: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code?: true;
  }
}

interface PaletteCustom {
  blue: string;
  yellow: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: PaletteCustom;
  }

  interface PaletteOptions {
    custom?: PaletteCustom;
  }
}
