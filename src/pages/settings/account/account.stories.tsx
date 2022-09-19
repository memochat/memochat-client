import { ComponentMeta, StoryObj } from '@storybook/react';

import Account from './index.page';

export default {
  component: Account,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Account>;

export const Default: StoryObj<typeof Account> = {
  args: {},
};
