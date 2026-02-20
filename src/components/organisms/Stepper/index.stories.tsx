import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './index';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Organism/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
