import { ComponentMeta, StoryObj } from '@storybook/react';

import Header from './Header';

export default {
  title: 'components/home/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: StoryObj<typeof Header> = {};
