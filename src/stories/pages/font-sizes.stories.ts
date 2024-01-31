import type { Meta, StoryObj } from '@storybook/react';

import { TokensGrid } from '../components/tokens-grid';
import { fontSizes } from '../utils/font-sizes';

const meta = {
  title: 'TOKENS/Fontsize',
  component: TokensGrid,
  args: {
    tokens: fontSizes,
    hasRemValue: true,
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const FontSize: Story = {};
