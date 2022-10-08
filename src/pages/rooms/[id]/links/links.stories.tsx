import { ComponentMeta, StoryObj } from '@storybook/react';

import LinkManageList from './index.page';

export default {
  title: 'Pages/Rooms/Detail/LinkManageList',
  component: LinkManageList,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof LinkManageList>;

export const Default: StoryObj<typeof LinkManageList> = {};
Default.args = {};
