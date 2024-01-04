export const linkSx = {
  color: 'primary.main',
  transition: 'color ease 0.5s',
  '&:hover': {
    transition: 'color ease 0.5s',
    color: 'custom.blue',
  },
};

export const footerSx = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 90,
  },
  firstLink: {
    ...linkSx,
    '&:hover': {
      color: 'custom.blue',
    },
  },
  secondLink: {
    ...linkSx,
    '&:hover': {
      color: 'secondary.main',
    },
  },
  thirtyLink: {
    ...linkSx,
    '&:hover': {
      color: 'custom.yellow',
    },
  },
  list: {
    display: 'flex',
    gap: 2,
  },
};
