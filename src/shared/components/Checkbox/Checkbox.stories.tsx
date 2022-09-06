import { ComponentMeta, StoryObj } from '@storybook/react';

import Checkbox from '.';

export default {
  title: 'Components/reusable/Checkbox',
  component: Checkbox,
  args: {
    checked: true,
  },
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {};
