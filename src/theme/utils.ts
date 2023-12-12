import { SxProps } from '@mui/material/styles';

export const combineSxProps = (...sxPropsList: SxProps[]): SxProps =>
  sxPropsList.reduce((acc, current) => ({ ...acc, ...current }), {});
