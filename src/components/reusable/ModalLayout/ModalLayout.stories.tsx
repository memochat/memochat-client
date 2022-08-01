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

const Wrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 16px;
  border-radius: 16px;

  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}
`;

export const Default: ComponentStory<typeof ModalLayout> = (args) => {
  return (
    <ModalLayout {...args}>
      <Wrapper open={args.open}>모달</Wrapper>
    </ModalLayout>
  );
};
