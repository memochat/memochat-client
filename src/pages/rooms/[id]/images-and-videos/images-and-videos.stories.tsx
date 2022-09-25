import { ComponentMeta, StoryObj } from '@storybook/react';

import ImageAndVideoManageList from './index.page';

export default {
  title: 'Pages/Rooms/Detail/ImageAndVideoManageList',
  component: ImageAndVideoManageList,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof ImageAndVideoManageList>;

export const Default: StoryObj<typeof ImageAndVideoManageList> = {};
Default.args = {};
