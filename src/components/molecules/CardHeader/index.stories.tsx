import type { Meta, StoryObj } from '@storybook/react';
import CardHeader from './index';

const meta: Meta<typeof CardHeader> = {
  title: 'Components/Molecule/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
