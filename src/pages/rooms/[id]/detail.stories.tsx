import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomDetail from './index.page';

export default {
  title: 'Pages/Rooms/Detail',
  component: RoomDetail,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof RoomDetail>;

export const Default: StoryObj<typeof RoomDetail> = {};
Default.args = {};
