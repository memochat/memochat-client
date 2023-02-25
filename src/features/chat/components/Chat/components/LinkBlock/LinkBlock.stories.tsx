import { ComponentMeta, StoryObj } from '@storybook/react';

import LinkBlock from '.';

export default {
  component: LinkBlock,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#F3F6FF',
          height: '100vh',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LinkBlock>;

const MOCK_LINK_DATA = {
  href: 'https://place.map.kakao.com/1974266862',
  title: '[카카오맵] 카페 노티드 [카카오맵] 카페 노티드 [카카오맵] 카페 노티드',
  description: '[카카오맵] 카페 노티드 [카카오맵] 카페 노티드 [카카오맵] 카페 노티드',
  thumbnail:
    'https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents-550x450.jpg',
};

export const 기본: StoryObj<typeof LinkBlock> = {
  args: MOCK_LINK_DATA,
};

export const 썸네일이_없는_경우: StoryObj<typeof LinkBlock> = {
  args: { ...MOCK_LINK_DATA, thumbnail: '' },
};

export const 제목이_없는_경우: StoryObj<typeof LinkBlock> = {
  args: {
    ...MOCK_LINK_DATA,
    title: '',
    description:
      '설명이 2줄을 차지합니다. 설명이 2줄을 차지합니다. 설명이 2줄을 차지합니다. 설명이 2줄을 차지합니다.',
  },
};

export const 설명이_없는_경우: StoryObj<typeof LinkBlock> = {
  args: {
    ...MOCK_LINK_DATA,
    description: '',
    title:
      '제목이 2줄을 차지합니다. 제목이 2줄을 차지합니다. 제목이 2줄을 차지합니다. 제목이 2줄을 차지합니다.',
  },
};

export const 설명과_제목이_없는_경우: StoryObj<typeof LinkBlock> = {
  args: {
    ...MOCK_LINK_DATA,
    description: '',
    title: '',
  },
};
