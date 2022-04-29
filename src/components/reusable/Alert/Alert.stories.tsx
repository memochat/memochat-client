import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from '.';

export default {
  title: 'Components/reusable/Alert',
  component: Alert,
  args: {
    open: true,
    title: '할 일을 삭제하시겠습니까?',
    description: '모든 작성 내용이 사라집니다.',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
