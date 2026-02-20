import type { Meta, StoryObj } from '@storybook/react';
import TagGroup from './index';

const meta: Meta<typeof TagGroup> = {
  title: 'Components/Molecule/TagGroup',
  component: TagGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
