import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './index';

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/Profile',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {};
