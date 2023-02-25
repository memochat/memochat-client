import { ComponentMeta, StoryObj } from '@storybook/react';

import BaseChat from '.';

export default {
  component: BaseChat,
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
} as ComponentMeta<typeof BaseChat>;

export const 기본: StoryObj<typeof BaseChat> = {
  args: {
    message: '12시 치과예약\n12시 치과예약\n12시 치과예약\n12시 치과예약',
    createdAt: new Date(),
  },
};

export const 링크: StoryObj<typeof BaseChat> = {
  args: {
    message: (
      <>
        {'링크는 a태그로 감쌉니다.\n'}
        <a>www.naver.com</a>
        {'\n링크는 a태그로 감쌉니다.\n'}
        <a>www.google.com</a>
      </>
    ),
    createdAt: new Date(),
  },
};

export const 텍스트가_긴_경우: StoryObj<typeof BaseChat> = {
  args: {
    message:
      '텍스트가 긴 경우 너비는 최대 80%입니다. 텍스트가 긴 경우 너비는 최대 80%입니다. 텍스트가 긴 경우 너비는 최대 80%입니다. 텍스트가 긴 경우 너비는 최대 80%입니다.',
    createdAt: new Date(),
  },
};
