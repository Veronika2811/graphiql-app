import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

import { ContainerForm } from 'components/ContainerForm';

import styles from './style';

interface FrameBoxProps {
  title: string;
  content: ReactNode;
  message: string;
  linkAdress: string;
  linkText: string;
}

export const FrameBox = ({
  title,
  content,
  message,
  linkAdress,
  linkText,
}: FrameBoxProps) => (
  <ContainerForm title={title}>
    {content}
    <Typography variant="body1" component="p" align="center" sx={styles.p}>
      {`${message} `}
      <Link component={RouterLink} to={linkAdress}>
        {linkText}
      </Link>
    </Typography>
  </ContainerForm>
);
