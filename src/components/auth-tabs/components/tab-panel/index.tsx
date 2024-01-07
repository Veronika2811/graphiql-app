import { memo } from 'react';

interface TabPanelProps {
  index: number;
  value: number;
  children: React.ReactNode;
}

export const TabPanel = ({ value, index, children }: TabPanelProps) => {
  if (!children) return null;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </div>
  );
};

export const TabPanelMemo = memo(
  TabPanel,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.value === nextProps.value &&
    prevProps.index === nextProps.index
);
