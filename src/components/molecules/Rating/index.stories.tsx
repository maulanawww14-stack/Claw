import type { Meta, StoryObj } from '@storybook/react';
import Rating from './index';

const meta: Meta<typeof Rating> = {
  title: 'Components/Molecule/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
