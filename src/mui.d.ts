import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    code: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    code: React.CSSProperties;
    subtitle3: React.CSSProperties;
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
    code: true;
    subtitle3: true;
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
