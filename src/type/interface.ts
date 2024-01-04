import { SxProps } from '@mui/material';

export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface KitSxProps {
  [key: string]: SxProps;
}
