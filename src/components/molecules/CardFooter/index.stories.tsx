import type { Meta, StoryObj } from '@storybook/react';
import CardFooter from './index';

const meta: Meta<typeof CardFooter> = {
  title: 'Components/Molecule/CardFooter',
  component: CardFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardFooter>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
