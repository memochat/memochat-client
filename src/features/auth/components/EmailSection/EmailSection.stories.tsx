import { ComponentMeta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import EmailSection from '.';

export default {
  component: EmailSection,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof EmailSection>;

export const Default: StoryObj<typeof EmailSection> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control } = useForm();
    //@ts-ignore
    return <EmailSection control={control} name="email" />;
  },
};
