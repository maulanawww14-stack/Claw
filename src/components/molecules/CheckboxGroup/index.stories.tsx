import type { Meta, StoryObj } from '@storybook/react';
import CheckboxGroup from './index';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Molecule/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
