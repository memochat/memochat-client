import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeHeader from './index';

export default {
  title: 'Components/home/HomeHeader',
  component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>;

const Template: ComponentStory<typeof HomeHeader> = () => <HomeHeader />;

export const Default = Template.bind({});
