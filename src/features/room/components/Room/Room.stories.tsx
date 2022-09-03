import { ComponentMeta, StoryObj } from '@storybook/react';

import Room from '.';

export default {
  title: 'Components/room/Room',
  component: Room,
  args: {
    name: '빈 메모',
    roomType: {
      name: '장바구니',
      imageUrl: '/images/bell.png',
    },
    isSelected: true,
  },
  argTypes: {},
} as ComponentMeta<typeof Room>;

export const 메모타입_텍스트: StoryObj<typeof Room> = {
  args: {
    lastChat: {
      type: 'text',
      text: '두부 장보기',
    },
  },
};

export const 메모타입_텍스트가_긴_경우: StoryObj<typeof Room> = {
  args: {
    lastChat: {
      type: 'text',
      text: '텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 텍스트가 긴 메모입니다 ',
    },
  },
};

export const 메모타입_이미지: StoryObj<typeof Room> = {
  args: {
    lastChat: {
      type: 'image',
    },
  },
};

export const 메모타입_동영상: StoryObj<typeof Room> = {
  args: {
    lastChat: {
      type: 'video',
    },
  },
};

export const 작성된_메모가_없는_경우: StoryObj<typeof Room> = {
  args: {},
};
