import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

interface CustomTabProps {
  tabNames: string[];
  tabContent: React.ReactElement[];
  activeTab?: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  if (value === index) return children;
  return null;
};

const CustomTab = ({ tabNames, tabContent, activeTab = 0 }: CustomTabProps) => {
  const [value, setValue] = useState(activeTab);
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
        sx={{ mb: 4 }}
      >
        {tabNames.map((item, _, array) => (
          <Tab
            key={item}
            label={item}
            sx={{ width: `${100 / array.length}%` }}
          />
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

export default CustomTab;
