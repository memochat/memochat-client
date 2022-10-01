import styled from '@emotion/styled';
import { ComponentMeta, StoryFn, StoryObj } from '@storybook/react';

import Icon from '../Icon';

import Header from '.';

export default {
  component: Header,
  args: {
    hasBottomLine: false,
  },
  argTypes: {
    hasBottomLine: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  args: {},
};

export const 텍스트_왼쪽: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    titleAlign: 'left',
  },
};

export const 텍스트_오른쪽: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    titleAlign: 'right',
  },
};

export const 텍스트_넘칠_때: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면 먹고싶다람쥐느러미미미미미미미',
  },
};

export const 오른쪽_아이콘_있을_때: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면',
    rightButtons: (
      <button type="button">
        <Icon name="Hamburger" color="black1" size={20} />
      </button>
    ),
  },
};

export const 텍스트_넘치고_오른쪽_아이콘_있을_때: StoryObj<typeof Header> = {
  args: {
    title: '글자수가 10글자 라면 먹고싶다람쥐느러미미미미미미미미미',
    rightButtons: (
      <button type="button">
        <Icon name="Hamburger" color="black1" size={20} />
      </button>
    ),
  },
};

export const 제목없고_아이콘만_있을_때: StoryObj<typeof Header> = {
  args: {
    title: '',
    rightButtons: (
      <button type="button">
        <Icon name="Hamburger" color="black1" size={20} />
      </button>
    ),
  },
};

const TextButton = styled.button`
  ${(p) => p.theme.typography.h4};
  color: ${(p) => p.theme.color.purple1};
`;

const TextButtonTemplate: StoryFn<typeof Header> = (args) => {
  return <Header {...args} rightButtons={<TextButton>취소</TextButton>} />;
};

export const 아이콘이_텍스트일_때 = TextButtonTemplate.bind({});
아이콘이_텍스트일_때.args = {
  title: '사진 & 동영상',
  leftButtons: (
    <button type="button">
      <Icon name="Close" color="black1" size={20} />
    </button>
  ),
};
