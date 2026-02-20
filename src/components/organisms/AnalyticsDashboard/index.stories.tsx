import type { Meta, StoryObj } from '@storybook/react';
import AnalyticsDashboard from './index';

const meta: Meta<typeof AnalyticsDashboard> = {
  title: 'Components/Organism/AnalyticsDashboard',
  component: AnalyticsDashboard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AnalyticsDashboard>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
