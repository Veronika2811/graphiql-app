import { ReactNode } from 'react';
import { Container, Paper, Typography } from '@mui/material';

import { authFormContainerSx } from './styles';

interface AuthFormContainerProps {
  title: string;
  children: ReactNode;
}

export const AuthFormContainer = ({
  title,
  children,
}: AuthFormContainerProps) => (
  <Container maxWidth="sm" sx={authFormContainerSx.container}>
    <Paper sx={authFormContainerSx.paper}>
      <Typography variant="h4" component="h2" align="center" marginBottom={2}>
        {title}
      </Typography>
      {children}
    </Paper>
  </Container>
);
