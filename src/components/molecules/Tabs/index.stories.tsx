import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Molecule/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
