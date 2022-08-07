import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoomDetailMenu from '.';

export default {
  title: 'Components/roomDetail/RoomDetailMenu',
  component: RoomDetailMenu,
  args: {
    onClick: () => {
      alert('hi');
    },
    title: '링크',
  },
  argTypes: {
    count: {
      type: 'number',
    },
    title: {
      type: 'string',
    },
    variant: {
      control: { type: 'radio' },
      options: ['danger', 'default'],
    },
  },
} as ComponentMeta<typeof RoomDetailMenu>;

const Template: ComponentStory<typeof RoomDetailMenu> = (args) => {
  return <RoomDetailMenu {...args}></RoomDetailMenu>;
};

export const Default = Template.bind({});
Default.args = {
  count: 1,
};

export const Danger = Template.bind({});
Danger.args = {
  title: '메모룸 나가기',
  variant: 'danger',
};

export const 이미지존재하는경우 = Template.bind({});
이미지존재하는경우.args = {
  count: 4,
  title: '이미지',
  children: (
    <span style={{ display: 'flex', gap: '10px' }}>
      <img
        width={80}
        height={80}
        src="https://images.unsplash.com/photo-1655488513929-42ed6b424409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2829&q=80"
      ></img>
      <img
        width={80}
        height={80}
        src="https://images.unsplash.com/photo-1655488513929-42ed6b424409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2829&q=80"
      ></img>
      <img
        width={80}
        height={80}
        src="https://images.unsplash.com/photo-1655488513929-42ed6b424409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2829&q=80"
      ></img>
      <img
        width={80}
        height={80}
        src="https://images.unsplash.com/photo-1655488513929-42ed6b424409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2829&q=80"
      ></img>
    </span>
  ),
};
