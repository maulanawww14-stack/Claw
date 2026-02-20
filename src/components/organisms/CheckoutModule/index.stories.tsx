import type { Meta, StoryObj } from '@storybook/react';
import CheckoutModule from './index';

const meta: Meta<typeof CheckoutModule> = {
  title: 'Components/Organism/CheckoutModule',
  component: CheckoutModule,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckoutModule>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
