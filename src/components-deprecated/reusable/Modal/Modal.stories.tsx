import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

import Modal, { ModalButtonGroup } from '.';

export default {
  title: 'Components/reusable/Modal',
  component: Modal,
  args: {
    open: true,
    title: '룸 만들기',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <p>룸을 만들어 볼까요!</p>
      <ModalButtonGroup>
        <Button type="secondary" onClick={() => null}>
          취소
        </Button>
        <Button onClick={() => null}>확인</Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {};
