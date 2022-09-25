import { ComponentMeta, StoryObj } from '@storybook/react';

import ConfirmModal from '.';

export default {
  component: ConfirmModal,
  args: {
    open: true,
  },
  argTypes: {
    headerTitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof ConfirmModal>;

export const Default: StoryObj<typeof ConfirmModal> = {
  args: {
    headerTitle: '알림',
    title: '로그아웃 하시겠습니까?',
    description: '메모 내용 백업이 일시 정지됩니다.',
  },
};
