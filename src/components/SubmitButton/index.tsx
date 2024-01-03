import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

import { AuthButton } from 'components/AuthButton';

import styles from './style';

export const useSubmit = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  return { submitDisabled, setSubmitDisabled };
};

interface SubmitButtonProps {
  submitDisabled: boolean;
  isValid: boolean;
  nameButton: string;
}

export const SubmitButton = ({
  submitDisabled,
  isValid,
  nameButton,
}: SubmitButtonProps) => (
  <Box sx={styles.box}>
    <AuthButton
      type="submit"
      variant="outlined"
      disabled={!isValid || submitDisabled}
    >
      {submitDisabled ? (
        <CircularProgress sx={styles.spinner} size={30} />
      ) : null}
      {nameButton}
    </AuthButton>
  </Box>
);
