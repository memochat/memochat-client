import { ComponentMeta, StoryObj } from '@storybook/react';

import settings from './index.page';

export default {
  component: settings,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof settings>;

export const Default: StoryObj<typeof settings> = {
  args: {},
};
