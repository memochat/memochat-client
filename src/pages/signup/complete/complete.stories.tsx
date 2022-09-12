import { ComponentMeta, StoryObj } from '@storybook/react';

import SignUpComplete from './index.page';

export default {
  component: SignUpComplete,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SignUpComplete>;

export const Default: StoryObj<typeof SignUpComplete> = {};

Default.args = {};
