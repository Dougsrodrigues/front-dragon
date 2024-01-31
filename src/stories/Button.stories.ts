import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/modules/app/components/button';
import { BUTTON_VARIANTS } from '@/modules/app/utils/constants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Proximo',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: BUTTON_VARIANTS.Secondary,
  },
};
export const Tertiary: Story = {
  args: {
    variant: BUTTON_VARIANTS.Tertiary,
  },
};
