import { useState } from 'react';
import styled from '@emotion/styled';

import RoomTypeRadioGroup from './RoomTypeRadioGroup';

import { Button, Modal, TextField } from '@src/components-deprecated/reusable';
import { ModalButtonGroup } from '@src/components-deprecated/reusable/Modal';
import { RoomType } from '@src/types/api/room';

const ROOM_NAME_MAX = 20;

interface RoomMutateValue {
  name: string;
  type: RoomType;
}

interface RoomMutateDialogProps {
  open: boolean;
  onClose: () => null;
  type: 'create' | 'update';
  defaultValue?: RoomMutateValue;
}

const RoomMutateDialog = ({
  open,
  onClose,
  type = 'create',
  defaultValue = {
    name: '',
    type: 'default',
  },
}: RoomMutateDialogProps) => {
  const title = type === 'create' ? '룸 만들기' : '룸 변경하기';

  const [form, setForm] = useState(defaultValue);

  const handleFormChange = (key: keyof RoomMutateValue) => (value: any) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <Wrapper>
        <TextField
          id="name"
          label={`룸 이름 (최대 ${ROOM_NAME_MAX}자)`}
          value={form.name}
          onChange={handleFormChange('name')}
          maxLength={ROOM_NAME_MAX}
        />
        <RoomTypeRadioGroup label="룸 유형" value={form.type} onChange={handleFormChange('type')} />
      </Wrapper>
      <ModalButtonGroup>
        <Button type="secondary">취소</Button>
        <Button type="primary" disabled={!form.name || !form.type}>
          확인
        </Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export default RoomMutateDialog;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem 1.6rem 1.2rem;

  > *:not(:last-child) {
    margin-bottom: 2.2rem;
  }
`;
