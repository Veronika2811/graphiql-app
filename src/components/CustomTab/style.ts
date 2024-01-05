import { KitSxProps } from 'types/interface';

const generateStyles = (tabsLength: number): KitSxProps => ({
  tabs: {
    mb: 4,
  },
  tab: {
    width: `${100 / tabsLength}%`,
  },
});

export default generateStyles;
