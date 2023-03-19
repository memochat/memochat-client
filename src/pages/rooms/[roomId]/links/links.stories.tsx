import { ComponentMeta, StoryObj } from '@storybook/react';

import LinkManageList from './index.page';

export default {
  component: LinkManageList,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof LinkManageList>;

export const Default: StoryObj<typeof LinkManageList> = {};
Default.args = {};
