import { ComponentMeta, StoryObj } from '@storybook/react';

import Home from './index.page';

export default {
  component: Home,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Home>;

export const Default: StoryObj<typeof Home> = {};

Default.args = {};
