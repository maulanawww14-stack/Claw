import type { Meta, StoryObj } from '@storybook/react';
import FeatureList from './index';

const meta: Meta<typeof FeatureList> = {
  title: 'Components/Organism/FeatureList',
  component: FeatureList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeatureList>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
