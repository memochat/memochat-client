import { ChangeEvent, useEffect, useState } from 'react';

import RoomTypeRadioGroup from '../RoomTypeRadioGroup';
import { UpsertRoomDialogProps } from './UpsertRoomDialog.types';
import * as S from './UpsertRoomDialog.styles';

import Button from '@src/shared/components/Button';
import { Modal, ModalButtonGroup, ModalContents, TextField } from '@src/shared/components';

const UpsertRoomDialog = ({ type, defaultValue, open, onClose }: UpsertRoomDialogProps) => {
  const title = type === 'create' ? '룸 만들기' : '룸 수정하기';

  const [value, setValue] = useState(
    defaultValue || {
      roomName: '',
      roomTypeId: undefined,
    },
  );

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

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

  const handleConfirm = () => {
    /** @todo */
    onClose();
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
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" disabled={isInvalid} onClick={handleConfirm}>
          확인
        </Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export default UpsertRoomDialog;
