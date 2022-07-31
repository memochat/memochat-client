import { ComponentMeta, StoryObj } from '@storybook/react';

import Signup from './Signup';

export default {
  component: Signup,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Signup>;

export const Default: StoryObj<typeof Signup> = {};
Default.args = {};
