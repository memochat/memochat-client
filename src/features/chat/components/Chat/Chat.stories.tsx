import { Meta, StoryObj } from '@storybook/react';

import Chat from '.';

export default {
  component: Chat,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#F3F6FF',
          height: '100vh',
          padding: '16px 0',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Chat>;

export const 기본: StoryObj<typeof Chat> = {
  args: {
    type: 'TEXT',
    message: '12시 치과예약',
    createdAt: new Date(),
  },
};

export const 링크_타입: StoryObj<typeof Chat> = {
  args: {
    type: 'LINK',
    message: '[카카오맵] 카페 노티드\nhttps://place.map.kakao.com/1974266862',
    createdAt: new Date(),
    link: {
      href: 'https://place.map.kakao.com/1974266862',
      title: '[카카오맵] 카페 노티드 [카카오맵] 카페 노티드 [카카오맵] 카페 노티드',
      description: '[카카오맵] 카페 노티드 [카카오맵] 카페 노티드 [카카오맵] 카페 노티드',
      thumbnail:
        'https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents-550x450.jpg',
    },
  },
};

export const 사진_타입: StoryObj<typeof Chat> = {
  args: {
    type: 'PHOTO',
    imageUrls: [
      'https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents-550x450.jpg',
      'https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents-550x450.jpg',
    ],
  },
};
