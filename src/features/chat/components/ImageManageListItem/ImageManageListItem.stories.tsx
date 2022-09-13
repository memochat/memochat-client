import { ComponentMeta, StoryObj } from '@storybook/react';

import ImageManageListItem from '.';

export default {
  title: 'Components/chat/ImageManageListItem',
  component: ImageManageListItem,
  args: {
    imageSrc: '/images/bell.png',
  },
  argTypes: {
    isSelected: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof ImageManageListItem>;

export const 읽기_모드: StoryObj<typeof ImageManageListItem> = {
  args: {
    mode: 'read',
  },
};

export const 편집_모드: StoryObj<typeof ImageManageListItem> = {
  args: {
    mode: 'edit',
    isSelected: true,
  },
};
