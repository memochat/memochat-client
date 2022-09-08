import { ComponentMeta, StoryObj } from '@storybook/react';

import SignIn from './index.page';

export default {
  component: SignIn,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SignIn>;

export const Default: StoryObj<typeof SignIn> = {};
Default.args = {};
