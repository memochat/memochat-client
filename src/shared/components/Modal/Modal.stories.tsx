import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';
import Modal from './Modal';
import ModalButtonGroup from './ModalButtonGroup';
import ModalContents from './ModalContents';

export default {
  title: 'Components/reusable/Modal',
  component: Modal,
  args: {
    open: true,
    title: '룸 만들기',
  },
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <ModalContents>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <p key={index}>룸을 만들어 볼까요!</p>
          ))}
      </ModalContents>
      <ModalButtonGroup>
        <Button variant="secondary">취소</Button>
        <Button>확인</Button>
      </ModalButtonGroup>
    </Modal>
  );
};
