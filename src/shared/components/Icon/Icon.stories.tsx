import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './index';

export default {
  argTypes: {
    name: { control: 'text' },
    color: { control: 'text' },
    size: { control: 'number', name: 'size(px)' },
    width: { control: 'text', name: 'width(px)' },
    height: { control: 'text', name: 'height(px)' },
  },
  args: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ ...args }) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Album',
  color: 'black1',
  size: 30,
};
