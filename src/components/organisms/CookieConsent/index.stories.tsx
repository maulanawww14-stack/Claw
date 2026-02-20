import type { Meta, StoryObj } from '@storybook/react';
import CookieConsent from './index';

const meta: Meta<typeof CookieConsent> = {
  title: 'Components/Organism/CookieConsent',
  component: CookieConsent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CookieConsent>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
