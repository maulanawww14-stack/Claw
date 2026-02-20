import type { Meta, StoryObj } from '@storybook/react';
import Grid from './index';

const meta: Meta<typeof Grid> = {
  title: 'Components/Atom/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
