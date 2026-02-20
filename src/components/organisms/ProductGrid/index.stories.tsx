import type { Meta, StoryObj } from '@storybook/react';
import ProductGrid from './index';

const meta: Meta<typeof ProductGrid> = {
  title: 'Components/Organism/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
