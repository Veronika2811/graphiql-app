import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

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
  if (value !== index) return null;

  return children;
};

export const CustomTab = ({
  tabNames,
  tabContent,
  activeTab = 0,
}: CustomTabProps) => {
  const [value, setValue] = useState(activeTab);
  const styles = generateStyles(tabNames.length);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="secondary"
        sx={styles.tabs}
      >
        {tabNames.map((item) => (
          <Tab key={item} label={item} sx={styles.tab} />
        ))}
      </Tabs>
      {tabContent.map((item, index) => (
        <TabPanel key={item.key} value={value} index={index}>
          {item}
        </TabPanel>
      ))}
    </>
  );
};
