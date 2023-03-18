import { ComponentMeta, StoryObj } from '@storybook/react';

import PhotoChat from '.';

export default {
  component: PhotoChat,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#F3F6FF',
          height: '100vh',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PhotoChat>;

export const Default: StoryObj<typeof PhotoChat> = {};

Default.args = {
  src: 'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
  alt: 'hi',
};
