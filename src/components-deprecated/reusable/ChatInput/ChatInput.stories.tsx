import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChatInput from '.';

export default {
  component: ChatInput,
  argTypes: {
    showSelectedRoomName: {
      controls: { type: 'boolean' },
      defautValue: true,
    },
  },
} as ComponentMeta<typeof ChatInput>;

const Template: ComponentStory<typeof ChatInput> = (props) => (
  <ChatInput
    {...props}
    selectedRoom={{
      id: 1,
      title: '취준일기',
    }}
  />
);

export const 선택된_룸이_있는_경우 = Template.bind({});

const Template2: ComponentStory<typeof ChatInput> = (props) => (
  <ChatInput
    {...props}
    selectedRoom={{
      id: 1,
      title: '취준일기',
    }}
    state="todo"
    setState={() => null}
  />
);

export const 투두인_경우 = Template2.bind({});
