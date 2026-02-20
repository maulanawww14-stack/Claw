import type { Meta, StoryObj } from '@storybook/react';
import StatWidget from './index';

const meta: Meta<typeof StatWidget> = {
  title: 'Components/Molecule/StatWidget',
  component: StatWidget,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatWidget>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
