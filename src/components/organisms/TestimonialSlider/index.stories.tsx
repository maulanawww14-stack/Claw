import type { Meta, StoryObj } from '@storybook/react';
import TestimonialSlider from './index';

const meta: Meta<typeof TestimonialSlider> = {
  title: 'Components/Organism/TestimonialSlider',
  component: TestimonialSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialSlider>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
