import { ComponentMeta, StoryObj } from '@storybook/react';

import Checkbox from '.';

export default {
  component: Checkbox,
  args: {
    checked: true,
  },
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {};
