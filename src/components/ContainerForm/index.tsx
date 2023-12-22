import { ReactNode } from 'react';
import { Container, Paper, Typography } from '@mui/material';

import styles from './styles';

interface ContainerFormProps {
  title: string;
  children: ReactNode;
}

const ContainerForm = ({ children, title }: ContainerFormProps) => (
  <Container maxWidth="sm" sx={styles.container}>
    <Paper sx={styles.paper}>
      <Typography variant="h4" component="h2" align="center" marginBottom={2}>
        {title}
      </Typography>
      {children}
    </Paper>
  </Container>
);

export default ContainerForm;
