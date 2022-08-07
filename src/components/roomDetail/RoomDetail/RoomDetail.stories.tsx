import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomDetail from '.';

export default {
  title: 'Components/Room Detail',
  component: RoomDetail,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof RoomDetail>;

export const Default: StoryObj<typeof RoomDetail> = {};
Default.args = {};
