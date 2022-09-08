import { ComponentMeta, StoryObj } from '@storybook/react';

import SignUp from './index.page';

export default {
  component: SignUp,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SignUp>;

export const Default: StoryObj<typeof SignUp> = {};
Default.args = {};
