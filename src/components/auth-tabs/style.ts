import { theme } from 'theme';

export const getAuthTabsSx = (tabsLength: number) => ({
  tabs: {
    mb: 4,
  },
  tab: {
    width: `${100 / tabsLength}%`,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
});
