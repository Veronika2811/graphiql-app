import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

import { routerLinkButtonSx } from './styles';

interface RouterLinkButtonProps {
  link: string;
  activeTab: number;
  children: string;
}

export const RouterLinkButton = ({
  link,
  activeTab,
  children,
}: RouterLinkButtonProps) => (
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
);
