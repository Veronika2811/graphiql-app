import { theme } from 'theme';
import { KitSxProps } from 'type/interface';

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
  },
};

export default styles;
