import { ComponentMeta, StoryObj } from '@storybook/react';

import SignInComplete from './index.page';

export default {
  component: SignInComplete,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SignInComplete>;

export const Default: StoryObj<typeof SignInComplete> = {};
