import { Box, Button, CircularProgress } from '@mui/material';

import { submitButtonSx } from './style';

interface SubmitButtonProps {
  nameButton: string;
  isValid: boolean;
  submitDisabled: boolean;
}

export const SubmitButton = ({
  nameButton,
  isValid,
  submitDisabled,
}: SubmitButtonProps) => (
  <Box sx={submitButtonSx.box}>
    <Button
      type="submit"
      variant="outlined"
      size="large"
      sx={submitButtonSx['auth-button']}
      disabled={!isValid || submitDisabled}
    >
      {submitDisabled ? (
        <CircularProgress
          data-testid="сircular-progress"
          sx={submitButtonSx.spinner}
          size={20}
        />
      ) : null}
      {nameButton}
    </Button>
  </Box>
);
