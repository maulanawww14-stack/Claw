import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './index';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Organism/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
