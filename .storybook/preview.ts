import type { Preview } from '@storybook/react';
import '@/modules/app/styles/colors.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: '$base-title'
    },
    backgrounds: {
      default: 'dark'
    },
  },
};

export default preview;
