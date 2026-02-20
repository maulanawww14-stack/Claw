import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './index';

const meta: Meta<typeof HeroSection> = {
  title: 'Components/Organism/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
