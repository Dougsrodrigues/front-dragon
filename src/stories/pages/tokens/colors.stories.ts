import type { Meta, StoryObj } from '@storybook/react';

import { ColorsGrid } from '../../components/color-grid';

const meta = {
  title: 'TOKENS/Colors',
  component: ColorsGrid,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
