import { ComponentMeta, StoryObj } from '@storybook/react';

import MemochatImage from '.';

export default {
  component: MemochatImage,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof MemochatImage>;

export const Default: StoryObj<typeof MemochatImage> = {};

Default.args = {
  src: 'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
  alt: 'hi',
};
