import type { Meta, StoryObj } from '@storybook/react';
import FaqAccordion from './index';

const meta: Meta<typeof FaqAccordion> = {
  title: 'Components/Organism/FaqAccordion',
  component: FaqAccordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FaqAccordion>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
