import type { Meta, StoryObj } from '@storybook/react';
import DashboardPage from './index';

const meta: Meta<typeof DashboardPage> = {
  title: 'Pages/Dashboard',
  component: DashboardPage,
};

export default meta;
type Story = StoryObj<typeof DashboardPage>;

export const Default: Story = {};
