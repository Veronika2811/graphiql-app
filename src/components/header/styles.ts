export const headerSx = {
  header: {
    bgcolor: 'background.default',
    minHeight: '5.6rem',
    maxHeight: '5.6rem',
    boxShadow: 0,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    '& .MuiSwitch-track': {
      bgcolor: 'secondary.main',
    },
  },
  button: {
    borderColor: 'text.primary',
    color: 'text.primary',
    borderRadius: 20,
    maxHeight: 30,
    fontSize: '0.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
};
