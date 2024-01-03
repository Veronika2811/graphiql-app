import { memo, useMemo, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { increaseArraySize } from 'utils/increaseArraySize';

import generateStyles from './style';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

interface CustomTabProps {
  tabNames: readonly string[];
  tabContent: React.ReactElement[];
  activeTab?: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
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

const TabPanelMemo = memo(
  TabPanel,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.value === nextProps.value &&
    prevProps.index === nextProps.index
);

export const CustomTab = ({
  tabNames,
  tabContent,
  activeTab = 0,
}: CustomTabProps) => {
  const [value, setValue] = useState(activeTab);
  const styles = useMemo(
    () => generateStyles(tabNames.length),
    [tabNames.length]
  );

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let tabNamesUdates = [...tabNames];
  let tabContentUpates = [...tabContent];

  if (tabNames.length > tabContent.length) {
    tabContentUpates = increaseArraySize<React.ReactElement>(
      [...tabContent],
      tabNames.length,
      <div />
    );
  }

  if (tabContent.length > tabNames.length) {
    tabNamesUdates = increaseArraySize<string>(
      [...tabNames],
      tabContent.length,
      ''
    );
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="secondary"
        sx={styles.tabs}
        aria-label="tabs"
      >
        {tabNamesUdates.map((item, index) => (
          <Tab
            key={item}
            label={item}
            sx={styles.tab}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>
      {tabContentUpates.map((item, index) => (
        <TabPanelMemo key={item.key} value={value} index={index}>
          {item}
        </TabPanelMemo>
      ))}
    </>
  );
};
