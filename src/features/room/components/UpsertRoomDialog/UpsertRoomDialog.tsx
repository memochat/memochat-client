import { ChangeEvent, useEffect, useState } from 'react';

import RoomTypeRadioGroup from '../RoomTypeRadioGroup';
import { UpsertRoomDialogProps, UpsertRoomDialogValue } from './UpsertRoomDialog.types';
import * as S from './UpsertRoomDialog.styles';
import useCreateMemoRoomMutation from '../../api/useCreateMemoRoomMutation';
import useUpdateMemoRoomMutation from '../../api/useUpdateMemoRoomMutation';

import Button from '@src/shared/components/Button';
import { Modal, ModalButtonGroup, ModalContents, TextField } from '@src/shared/components';

const UpsertRoomDialog = ({
  type,
  selectedRoomId,
  defaultValue,
  open,
  onClose,
}: UpsertRoomDialogProps) => {
  const title = type === 'create' ? '룸 만들기' : '룸 수정하기';

  const { mutate: createMemoRoom } = useCreateMemoRoomMutation();
  const { mutate: updateRoom } = useUpdateMemoRoomMutation();

  const [value, setValue] = useState<UpsertRoomDialogValue>(
    defaultValue || {
      name: '',
      roomCategoryId: 1,
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
      name: e.target.value,
    }));
  };

  const handleRoomTypeChange = (id: number) => {
    setValue((prevValue) => ({
      ...prevValue,
      roomCategoryId: id,
    }));
  };

  const handleConfirm = async () => {
    if (type === 'create') {
      await createMemoRoom(value);
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
