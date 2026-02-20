import type { Meta, StoryObj } from '@storybook/react';
import LoadingWrapper from './index';

const meta: Meta<typeof LoadingWrapper> = {
  title: 'Components/Molecule/LoadingWrapper',
  component: LoadingWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingWrapper>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
