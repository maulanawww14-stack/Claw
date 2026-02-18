import type { Meta, StoryObj } from '@storybook/react';
import InputField from './index';

const meta: Meta<typeof InputField> = {
  title: 'Components/Molecules/InputField',
  component: InputField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Email',
    value: 'hiz.m@example.com',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password is too weak',
    value: '12345',
  },
};
