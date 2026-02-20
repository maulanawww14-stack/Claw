import type { Meta, StoryObj } from '@storybook/react';
import BaseContainer from './index';

const meta: Meta<typeof BaseContainer> = {
  title: 'Components/Atom/BaseContainer',
  component: BaseContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseContainer>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
