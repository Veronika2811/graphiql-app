import { fireEvent, render, screen } from '@testing-library/react';

import { TabPanel, TabPanelMemo } from './components/tab-panel';
import { AuthTabs } from '.';

describe('CustomTab', () => {
  it('renders tabs and switches active tab correctly', () => {
    const tabNames = ['Tab 1', 'Tab 2', 'Tab 3'];
    const tabContent = [
      <div key="1">Content 1</div>,
      <div key="2">Content 2</div>,
      <div key="3">Content 3</div>,
    ];

    const { getByText } = render(
      <AuthTabs tabNames={tabNames} tabContent={tabContent} />
    );

    tabNames.forEach((tabName) => {
      expect(getByText(tabName)).toBeInTheDocument();
    });

    expect(getByText('Content 1')).toBeInTheDocument();

    fireEvent.click(getByText('Tab 2'));

    expect(getByText('Content 2')).toBeInTheDocument();
  });

  it('does not re-render when props remain the same', () => {
    const children = <div>Test</div>;
    const index = 0;
    const value = 0;

    const { rerender, container } = render(
      <TabPanelMemo index={index} value={value}>
        {children}
      </TabPanelMemo>
    );

    rerender(
      <TabPanelMemo index={index} value={value}>
        {children}
      </TabPanelMemo>
    );

    const initialRender = container.firstChild;

    const afterRerender = container.firstChild;

    expect(initialRender).toEqual(afterRerender);
  });

  it('renders extra empty tabs when tabContent is smaller than tabNames', () => {
    const tabNames = ['Tab 1', 'Tab 2', 'Tab 3'];
    const tabContent = [
      <div key="1">Content 1</div>,
      <div key="2">Content 2</div>,
    ];

    render(<AuthTabs tabNames={tabNames} tabContent={tabContent} />);

    tabNames.forEach((tabName) => {
      expect(screen.getByText(tabName)).toBeInTheDocument();
    });
  });

  it('renders extra empty content when tabNames is smaller than tabContent', () => {
    const tabNames = ['Tab 1', 'Tab 2'];
    const tabContent = [
      <div key="1">Content 1</div>,
      <div key="2">Content 2</div>,
      <div key="3">Content 3</div>,
    ];

    render(<AuthTabs tabNames={tabNames} tabContent={tabContent} />);

    tabContent.forEach((content) => {
      expect(screen.getByText(content.props.children)).toBeInTheDocument();
    });
  });

  it('does not render when no children are passed', () => {
    const children = null;

    render(
      <TabPanel value={0} index={0}>
        {children}
      </TabPanel>
    );

    const tabPanel = screen.queryByRole('tabpanel');

    expect(tabPanel).not.toBeInTheDocument();
  });
});
