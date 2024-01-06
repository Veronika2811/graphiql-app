import { theme } from 'theme';
import { KitSxProps } from 'types/interface';

const styles: KitSxProps = {
  paper: {
    borderRadius: 8,
    px: 9,
    py: 10,
    [theme.breakpoints.down('sm')]: {
      px: 3,
      py: 4,
    },
  },
  container: {
    py: 5,
    [theme.breakpoints.down('sm')]: {
      px: 0,
    },
  },
};

export default styles;
