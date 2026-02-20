import type { Meta, StoryObj } from '@storybook/react';
import FormField from './index';

const meta: Meta<typeof FormField> = {
  title: 'Components/Molecule/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
