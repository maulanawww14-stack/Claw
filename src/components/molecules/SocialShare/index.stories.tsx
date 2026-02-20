import type { Meta, StoryObj } from '@storybook/react';
import SocialShare from './index';

const meta: Meta<typeof SocialShare> = {
  title: 'Components/Molecule/SocialShare',
  component: SocialShare,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialShare>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
