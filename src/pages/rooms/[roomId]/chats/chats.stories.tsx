import { ComponentMeta, StoryObj } from '@storybook/react';

import ChatList from './index.page';

export default {
  component: ChatList,
} as ComponentMeta<typeof ChatList>;

export const Default: StoryObj<typeof ChatList> = {};

Default.args = {};
