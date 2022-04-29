import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import ModalLayout from '.';

export default {
  title: 'Components/reusable/ModalLayout',
  component: ModalLayout,
  args: {
    open: true,
  },
} as ComponentMeta<typeof ModalLayout>;

const StyledWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  padding: 1.6rem;
  border-radius: 1.6rem;

  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}

  > p {
    height: 3rem;
  }
`;

const Template: ComponentStory<typeof ModalLayout> = (args) => {
  return (
    <ModalLayout {...args}>
      <StyledWrapper open={args.open}>모달</StyledWrapper>
    </ModalLayout>
  );
};

export const Default = Template.bind({});
Default.args = {};
