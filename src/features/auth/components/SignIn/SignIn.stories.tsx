import { ComponentMeta, StoryObj } from '@storybook/react';

import SignIn from '.';

export default {
  component: SignIn,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SignIn>;

export const Default: StoryObj<typeof SignIn> = {};
Default.args = {};
