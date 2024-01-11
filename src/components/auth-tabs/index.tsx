import { useEffect, useMemo, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { increaseArraySize } from 'utils/increaseArraySize';

import { TabPanelMemo } from './components/tab-panel';
import { getAuthTabsSx } from './style';

interface CustomTabProps {
  tabNames: readonly string[];
  tabContent: readonly React.ReactElement[];
  activeTab?: number;
  onCangeActiveTab: (activeTab: number) => void;
}

export const AuthTabs = ({
  tabNames,
  tabContent,
  activeTab = 0,
  onCangeActiveTab = () => {},
}: CustomTabProps) => {
  const [value, setValue] = useState(activeTab);

  const authTabsSx = useMemo(
    () => getAuthTabsSx(tabNames.length),
    [tabNames.length]
  );

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    onCangeActiveTab(newValue);
    setValue(newValue);
  };
  useEffect(() => {
    setValue(activeTab);
  }, [activeTab]);

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
        sx={authTabsSx.tabs}
        aria-label="tabs"
      >
        {tabNamesUdates.map((item, index) => (
          <Tab
            key={item}
            label={item}
            sx={authTabsSx.tab}
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
