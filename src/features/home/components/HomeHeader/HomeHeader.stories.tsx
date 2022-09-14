import { ComponentMeta, StoryObj } from '@storybook/react';

import HomeHeader from './HomeHeader';

export default {
  title: 'components/home/HomeHeader',
  component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>;

export const Default: StoryObj<typeof HomeHeader> = {};
