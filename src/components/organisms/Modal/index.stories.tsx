import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Organism/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
