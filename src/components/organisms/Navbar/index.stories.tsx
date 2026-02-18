import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './index';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Organisms/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
