import { ComponentMeta, StoryObj } from '@storybook/react';

import Loading from '.';

export default {
  component: Loading,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Loading>;

export const Default: StoryObj<typeof Loading> = {};

Default.args = {
  initialLoadingState: true,
};
