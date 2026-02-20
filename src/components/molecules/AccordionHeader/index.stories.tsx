import type { Meta, StoryObj } from '@storybook/react';
import AccordionHeader from './index';

const meta: Meta<typeof AccordionHeader> = {
  title: 'Components/Molecule/AccordionHeader',
  component: AccordionHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
