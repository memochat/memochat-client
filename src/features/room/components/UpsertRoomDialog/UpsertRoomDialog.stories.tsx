import { ComponentMeta, StoryObj } from '@storybook/react';

import UpsertRoomDialog from '.';

export default {
  component: UpsertRoomDialog,
  args: {
    open: true,
  },
} as ComponentMeta<typeof UpsertRoomDialog>;

export const 룸_만들기: StoryObj<typeof UpsertRoomDialog> = {
  args: {
    type: 'create',
  },
};

export const 룸_수정하기: StoryObj<typeof UpsertRoomDialog> = {
  args: {
    type: 'update',
    defaultValue: {
      roomName: '사고싶은 옷',
      roomTypeId: 4,
    },
  },
};
