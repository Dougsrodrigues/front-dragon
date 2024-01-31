import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/modules/app/components/button';
import { BUTTON_VARIANTS } from '@/modules/app/utils/constants';

const meta = {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Proximo',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

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
