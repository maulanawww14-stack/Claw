import type { Meta, StoryObj } from '@storybook/react';
import Loader from './index';

const meta: Meta<typeof Loader> = {
  title: 'Components/Atom/Loader',
  component: Loader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
