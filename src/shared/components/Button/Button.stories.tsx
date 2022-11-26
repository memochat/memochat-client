import { ComponentMeta, StoryObj } from '@storybook/react';

import Button, { LinkButton as LinkButtonComponent } from '.';

export default {
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
    variant: 'primary',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    variant: 'danger',
  },
};

export const LinkButton: StoryObj<typeof LinkButtonComponent> = {
  args: {
    variant: 'primary',
    href: '/',
  },
};
