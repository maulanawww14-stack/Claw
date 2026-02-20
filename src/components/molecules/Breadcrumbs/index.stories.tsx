import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './index';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Molecule/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
