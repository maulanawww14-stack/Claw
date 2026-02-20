import type { Meta, StoryObj } from '@storybook/react';
import CommentSection from './index';

const meta: Meta<typeof CommentSection> = {
  title: 'Components/Organism/CommentSection',
  component: CommentSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentSection>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
