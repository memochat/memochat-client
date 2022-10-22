import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomListItem from '.';

export default {
  component: RoomListItem,
  args: {
    name: '빈 메모',
    roomType: {
      name: '장바구니',
      imageUrl: '/images/bell.png',
    },
    isSelected: true,
    onSelect: () => alert('Select'),
    onClick: () => alert('Click'),
    onPin: () => alert('Pin'),
    onEdit: () => alert('Edit'),
    onDelete: () => alert('Delete'),
  },
  argTypes: {},
} as ComponentMeta<typeof RoomListItem>;

export const 메모타입_텍스트: StoryObj<typeof RoomListItem> = {
  args: {
    lastChat: {
      type: 'text',
      text: '두부 장보기',
    },
  },
};

export const 메모타입_텍스트가_긴_경우: StoryObj<typeof RoomListItem> = {
  args: {
    lastChat: {
      type: 'text',
      text: '텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 ',
    },
  },
};

export const 메모타입_이미지: StoryObj<typeof RoomListItem> = {
  args: {
    lastChat: {
      type: 'image',
    },
  },
};

export const 메모타입_동영상: StoryObj<typeof RoomListItem> = {
  args: {
    lastChat: {
      type: 'video',
    },
  },
};

export const 작성된_메모가_없는_경우: StoryObj<typeof RoomListItem> = {
  args: {},
};
