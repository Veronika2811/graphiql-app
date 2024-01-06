import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import { Button, Hidden, IconButton } from '@mui/material';

import { styles } from './style';

interface HeaderButtonProps {
  to?: string;
  name: string;
  icon: ReactElement<SvgIconComponent>;
  onClick?: () => void;
}

export const HeaderButton = ({
  to,
  name,
  icon,
  onClick = () => {},
}: HeaderButtonProps) => (
  <>
    <Hidden mdDown>
      {to ? (
        <Button
          component={Link}
          to={to}
          onClick={onClick}
          variant="outlined"
          size="large"
          sx={styles.button}
        >
          {name}
        </Button>
      ) : (
        <Button
          onClick={onClick}
          variant="outlined"
          size="large"
          sx={styles.button}
        >
          {name}
        </Button>
      )}
    </Hidden>
    <Hidden mdUp>
      {to ? (
        <IconButton
          component={Link}
          to={to}
          onClick={onClick}
          color="primary"
          sx={styles.iconButton}
          aria-label={name}
        >
          {icon}
        </IconButton>
      ) : (
        <IconButton
          onClick={onClick}
          color="primary"
          sx={styles.iconButton}
          aria-label={name}
        >
          {icon}
        </IconButton>
      )}
    </Hidden>
  </>
);
