import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './index';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/Atoms/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};
