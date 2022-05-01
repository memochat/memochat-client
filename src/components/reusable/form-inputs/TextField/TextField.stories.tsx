import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './index';

export default {
  title: 'Components/reusable/TextField',
  component: TextField,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '아이디',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: '아이디를 입력하세요',
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
    maxLength: {
      control: { type: 'number' },
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: null,
    },
    errorMessage: {
      control: { type: 'text' },
      defaultValue: '에러메세지',
    },
    success: {
      control: { type: 'boolean' },
      defaultValue: null,
    },
    successMessage: {
      control: { type: 'text' },
      defaultValue: '성공메세지',
    },
    helperMessage: {
      control: { type: 'text' },
      defaultValue: '룸 이름은 10글자 이내 입니다',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState('');

  return <TextField {...args} id="test" value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
