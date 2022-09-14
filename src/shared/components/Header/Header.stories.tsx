import { ComponentMeta, StoryObj } from '@storybook/react';

import Header from '.';

export default {
  component: Header,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    onLeftIconClick: () => {
      alert('hi');
    },
  },
};

export const 텍스트왼쪽: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    titleAlign: 'left',
    onLeftIconClick: () => {
      alert('hi');
    },
  },
};

export const 텍스트오른쪽: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    titleAlign: 'right',
    onLeftIconClick: () => {
      alert('hi');
    },
  },
};

export const 텍스트넘칠때: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면 먹고싶다람쥐느러미미미미미미미',
  },
};

export const 오른쪽아이콘있을때: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    rightIconName: 'Hamburger',
  },
};

export const 텍스트넘치고오른쪽아이콘있을때: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면 먹고싶다람쥐느러미미미미미미미미미',
    rightIconName: 'Hamburger',
  },
};

export const 제목없고아이콘만있을때: StoryObj<typeof Header> = {
  args: {
    title: '',
    rightIconName: 'Hamburger',
  },
};
