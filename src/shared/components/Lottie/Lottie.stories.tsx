import { ComponentMeta, StoryObj } from '@storybook/react';

import { loginLottie } from '@src/assets/lottie';

import Lottie from '.';

export default {
  component: Lottie,
  args: {
    animationData: loginLottie,
    autoplay: true,
    loop: false,
  },
  argTypes: {},
} as ComponentMeta<typeof Lottie>;

export const Default: StoryObj<typeof Lottie> = {};
