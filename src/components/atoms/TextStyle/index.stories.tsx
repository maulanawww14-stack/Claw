import type { Meta, StoryObj } from '@storybook/react';
import TextStyle from './index';

const meta: Meta<typeof TextStyle> = {
  title: 'Components/Atom/TextStyle',
  component: TextStyle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextStyle>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
