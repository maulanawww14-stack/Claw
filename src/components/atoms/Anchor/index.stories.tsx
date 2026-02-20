import type { Meta, StoryObj } from '@storybook/react';
import Anchor from './index';

const meta: Meta<typeof Anchor> = {
  title: 'Components/Atom/Anchor',
  component: Anchor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
