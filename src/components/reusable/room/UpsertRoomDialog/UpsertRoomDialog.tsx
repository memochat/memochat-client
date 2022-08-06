import { ChangeEvent, useState } from 'react';

import Button from '../../Button';
import { UpsertRoomDialogProps } from './UpsertRoomDialog.types';
import * as S from './UpsertRoomDialog.styles';
import ModalContents from '../../Modal/ModalContents';
import TextField from '../../TextField';
import RoomTypeRadioGroup from '../RoomTypeRadioGroup';

import Modal, { ModalButtonGroup } from '@src/components/reusable/Modal';

const UpsertRoomDialog = ({ type, defaultValue, open, onClose }: UpsertRoomDialogProps) => {
  const title = type === 'create' ? '룸 만들기' : '룸 수정하기';

  const [value, setValue] = useState(
    defaultValue || {
      roomName: '',
      roomTypeId: undefined,
    },
  );

  const handleRoomNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => ({
      ...prevValue,
      roomName: e.target.value,
    }));
  };

  const handleRoomTypeChange = (id: number) => {
    setValue((prevValue) => ({
      ...prevValue,
      roomTypeId: id,
    }));
  };

  const isInvalid = !value.roomName || !value.roomTypeId;

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <ModalContents>
        <S.Wrapper>
          <TextField
            id="roomName"
            label="룸 이름 (최대 10자)"
            value={value.roomName}
            onChange={handleRoomNameChange}
            maxLength={10}
          />
          <RoomTypeRadioGroup
            label="룸 유형"
            value={value.roomTypeId}
            onChange={handleRoomTypeChange}
          />
        </S.Wrapper>
      </ModalContents>
      <ModalButtonGroup>
        <Button variant="secondary">취소</Button>
        <Button variant="primary" disabled={isInvalid}>
          확인
        </Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export default UpsertRoomDialog;
