import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomList from './index.page';

export default {
  component: RoomList,
} as ComponentMeta<typeof RoomList>;

export const Default: StoryObj<typeof RoomList> = {};
Default.args = {};
