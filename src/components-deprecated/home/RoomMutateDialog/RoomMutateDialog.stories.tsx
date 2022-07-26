import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoomMutateDialog from './index';

export default {
  title: 'Components/home/RoomMutateDialog',
  component: RoomMutateDialog,
  argTypes: {
    open: { controls: 'boolean', defaultValue: true },
    type: {
      controls: { type: 'radio' },
      options: ['create', 'update'],
    },
  },
} as ComponentMeta<typeof RoomMutateDialog>;

const Template: ComponentStory<typeof RoomMutateDialog> = (args) => <RoomMutateDialog {...args} />;

export const 룸_생성 = Template.bind({});
룸_생성.args = {
  type: 'create',
};

const Template2: ComponentStory<typeof RoomMutateDialog> = (args) => <RoomMutateDialog {...args} />;

export const 룸_변경 = Template2.bind({});
룸_변경.args = {
  type: 'update',
  defaultValue: {
    name: '공부할 것',
    type: 'study',
  },
};
