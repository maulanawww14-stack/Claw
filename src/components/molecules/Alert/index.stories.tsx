import type { Meta, StoryObj } from '@storybook/react';
import Alert from './index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Molecule/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
