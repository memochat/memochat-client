import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoomList from './index';

export default {
  title: 'Components/home/RoomList',
  component: RoomList,
} as ComponentMeta<typeof RoomList>;

const Template: ComponentStory<typeof RoomList> = () => <RoomList />;

export const Default = Template.bind({});
