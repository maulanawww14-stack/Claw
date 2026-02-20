import type { Meta, StoryObj } from '@storybook/react';
import RegistrationForm from './index';

const meta: Meta<typeof RegistrationForm> = {
  title: 'Components/Organism/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
