import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenu from './index';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Molecule/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
