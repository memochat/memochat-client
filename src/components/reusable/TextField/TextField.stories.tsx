import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import TextField from './index';

export default {
  title: 'Components/reusable/TextField',
  component: TextField,
  args: {
    id: 'test',
    label: '아이디',
    placeholder: '아이디를 입력하세요',
    value: '',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
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
    },
    errorMessage: {
      control: { type: 'text' },
    },
    success: {
      control: { type: 'boolean' },
    },
    successMessage: {
      control: { type: 'text' },
    },
    helperMessage: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof TextField>;

const Default: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState('');

  return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const 기본 = Default.bind({});
기본.args = {};

export const 최대_글자수_제한 = Default.bind({});
최대_글자수_제한.args = {
  helperMessage: '아이디는 10글자 이내 입니다',
  maxLength: 10,
};

export const 에러 = Default.bind({});
에러.args = {
  error: true,
  errorMessage: '에러메세지',
};

export const 성공 = Default.bind({});
성공.args = {
  success: true,
  successMessage: '성공메세지',
};
