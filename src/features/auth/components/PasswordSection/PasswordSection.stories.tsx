import { ComponentMeta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import PasswordSection from '.';

export default {
  component: PasswordSection,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof PasswordSection>;

export const Default: StoryObj<typeof PasswordSection> = {
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control } = useForm();
    //@ts-ignore
    return <PasswordSection control={control} name={['password', 'password2']} />;
  },
};
