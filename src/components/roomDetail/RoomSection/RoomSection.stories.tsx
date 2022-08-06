import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoomSection from '.';

export default {
  component: RoomSection,
  args: {
    onClick: () => {
      alert('hi');
    },
    title: '링크',
    count: 1,
  },
  argTypes: {
    count: {
      type: 'number',
    },
    title: {
      type: 'string',
    },
    color: {
      control: { type: 'radio' },
      options: ['red1', 'purple1'],
    },
  },
} as ComponentMeta<typeof RoomSection>;

const Template: ComponentStory<typeof RoomSection> = (args) => {
  return <RoomSection {...args}></RoomSection>;
};

export const Default = Template.bind({});
Default.args = {};

export const 이미지존재하는경우 = Template.bind({});
이미지존재하는경우.args = {
  images: ['/', '/'],
};
