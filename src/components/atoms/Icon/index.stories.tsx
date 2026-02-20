import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/Atom/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
