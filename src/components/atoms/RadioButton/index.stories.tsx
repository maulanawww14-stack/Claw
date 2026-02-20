import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './index';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Atom/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
