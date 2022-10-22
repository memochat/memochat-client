import { ComponentMeta, StoryObj } from '@storybook/react';

import LinkManageListItem from '.';

export default {
  component: LinkManageListItem,
  args: {
    imageSrc: '/images/bell.png',
    title:
      '[카카오맵] 카페 노티드 두줄 처리 두줄 혹시 넘기면 말줄임 말줄임 말줄임 말줄임 말줄임 말줄임 말줄임 말줄임 말줄임 말줄임 말줄임',
  },
  argTypes: {
    isSelected: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '30px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LinkManageListItem>;

export const 읽기_모드: StoryObj<typeof LinkManageListItem> = {
  args: {
    mode: 'read',
  },
};

export const 편집_모드: StoryObj<typeof LinkManageListItem> = {
  args: {
    mode: 'edit',
    isSelected: true,
  },
};
