import { ChangeEvent, useEffect, useState } from 'react';

import RoomTypeRadioGroup from '../RoomTypeRadioGroup';
import { UpsertRoomDialogProps, UpsertRoomDialogValue } from './UpsertRoomDialog.types';
import * as S from './UpsertRoomDialog.styles';
import useCreateMemoRoomMutation from '../../api/useCreateMemoRoomMutation';
import useUpdateMemoRoomMutation from '../../api/useUpdateMemoRoomMutation';

import Button from '@src/shared/components/Button';
import { Modal, ModalButtonGroup, ModalContents, TextField } from '@src/shared/components';

const DEFAULT_VALUE = {
  name: '',
  roomCategoryId: 1,
};

// TODO: react hook form 적용
const UpsertRoomDialog = ({
  type,
  selectedRoomId,
  defaultValue = DEFAULT_VALUE,
  open,
  onClose,
}: UpsertRoomDialogProps) => {
  const title = type === 'create' ? '룸 만들기' : '룸 수정하기';

  const { mutate: createMemoRoom } = useCreateMemoRoomMutation();
  const { mutate: updateRoom } = useUpdateMemoRoomMutation();

  const [value, setValue] = useState<UpsertRoomDialogValue>(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue || DEFAULT_VALUE);
    }
  }, [defaultValue]);

  const handleRoomNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => ({
      ...prevValue,
      name: e.target.value,
    }));
  };

  const handleRoomTypeChange = (id: number) => {
    setValue((prevValue) => ({
      ...prevValue,
      roomCategoryId: id,
    }));
  };

  const clearValue = () => {
    setValue(DEFAULT_VALUE);
  };

  const handleCancel = () => {
    clearValue();
    onClose();
  };

  const handleConfirm = async () => {
    if (type === 'create') {
      await createMemoRoom(value);
      clearValue();
    } else {
      await updateRoom({
        id: selectedRoomId,
        param: value,
      });
    }
    onClose();
  };

  const isInvalid = !value.name || !value.roomCategoryId;

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <ModalContents>
        <S.Wrapper>
          <TextField
            id="name"
            label="룸 이름 (최대 10자)"
            value={value.name}
            placeholder="룸 이름을 입력하세요."
            onChange={handleRoomNameChange}
            maxLength={10}
          />
          <RoomTypeRadioGroup
            label="룸 유형"
            value={value.roomCategoryId}
            onChange={handleRoomTypeChange}
          />
        </S.Wrapper>
      </ModalContents>
      <ModalButtonGroup>
        <Button variant="secondary" onClick={handleCancel}>
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
