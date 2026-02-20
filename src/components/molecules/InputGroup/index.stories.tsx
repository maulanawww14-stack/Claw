import type { Meta, StoryObj } from '@storybook/react';
import InputGroup from './index';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/Molecule/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
