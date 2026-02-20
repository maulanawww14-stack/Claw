import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './index';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Atom/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
