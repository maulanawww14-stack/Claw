import type { Meta, StoryObj } from '@storybook/react';
import UserProfileCard from './index';

const meta: Meta<typeof UserProfileCard> = {
  title: 'Components/Organism/UserProfileCard',
  component: UserProfileCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
