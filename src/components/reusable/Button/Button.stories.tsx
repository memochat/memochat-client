import { ComponentMeta, StoryObj } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/reusable/Button',
  component: Button,
  args: {
    children: '확인',
    disabled: false,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    type: 'primary',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    type: 'secondary',
  },
};
