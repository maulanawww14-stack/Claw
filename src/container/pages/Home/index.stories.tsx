import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './index';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
