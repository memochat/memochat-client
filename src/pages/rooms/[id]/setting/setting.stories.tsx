import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomSetting from './index.page';

export default {
  component: RoomSetting,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof RoomSetting>;

export const Default: StoryObj<typeof RoomSetting> = {};
Default.args = {};
