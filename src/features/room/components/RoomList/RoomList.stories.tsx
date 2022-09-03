import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomList from '.';

export default {
  title: 'Components/room/RoomList',
  component: RoomList,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof RoomList>;

export const Default: StoryObj<typeof RoomList> = {};
