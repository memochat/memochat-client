import { ComponentMeta, StoryObj } from '@storybook/react';

import NotFound from './index.page';

export default {
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

export const Default: StoryObj<typeof NotFound> = {};

Default.args = {};
