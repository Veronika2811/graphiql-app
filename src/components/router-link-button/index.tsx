import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import { Button, Hidden, IconButton, Tooltip } from '@mui/material';

import { routerLinkButtonSx } from './styles';

interface RouterLinkButtonProps {
  link: string;
  activeTab: number;
  children: string;
  icon: ReactElement<SvgIconComponent>;
}

export const RouterLinkButton = ({
  link,
  activeTab,
  children,
  icon,
}: RouterLinkButtonProps) => (
  <>
    <Hidden mdDown>
      <Button
        variant="outlined"
        size="large"
        sx={routerLinkButtonSx.button}
        component={RouterLink}
        to={link}
        state={{ activeTab }}
      >
        {children}
      </Button>
    </Hidden>
    <Hidden mdUp>
      <Tooltip title={children}>
        <IconButton
          color="primary"
          component={RouterLink}
          to={link}
          state={{ activeTab }}
          aria-label={children}
        >
          {icon}
        </IconButton>
      </Tooltip>
    </Hidden>
  </>
);
