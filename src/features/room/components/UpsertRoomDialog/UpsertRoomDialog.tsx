import { Controller, useForm } from 'react-hook-form';

import RoomTypeRadioGroup from '../RoomTypeRadioGroup';
import { UpsertRoomDialogProps, UpsertRoomDialogValue } from './UpsertRoomDialog.types';
import * as S from './UpsertRoomDialog.styles';
import useCreateMemoRoomMutation from '../../api/useCreateMemoRoomMutation';
import useUpdateMemoRoomMutation from '../../api/useUpdateMemoRoomMutation';

import Button from '@src/shared/components/Button';
import { Modal, ModalButtonGroup, ModalContents, TextField } from '@src/shared/components';
import { queryClient } from '@src/shared/configs/react-query';
import { memoRoomKeys } from '@src/shared/utils/queryKeys';

const DEFAULT_VALUE = {
  name: '',
  roomCategoryId: 1,
};

const NAME_MAX = 10;

const UpsertRoomDialog = ({
  type,
  selectedRoomId,
  defaultValues = DEFAULT_VALUE,
  open,
  onClose,
}: UpsertRoomDialogProps) => {
  const title = type === 'create' ? '룸 만들기' : '룸 수정하기';

  const { mutate: createMemoRoom } = useCreateMemoRoomMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
      reset();
      onClose();
    },
  });
  const { mutate: updateRoom } = useUpdateMemoRoomMutation({
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(memoRoomKeys.list());
      queryClient.invalidateQueries(memoRoomKeys.detail(id));
      onClose();
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, isValid },
  } = useForm<UpsertRoomDialogValue>({
    defaultValues,
    mode: 'all',
  });

  const handleCancel = () => {
    reset();
    onClose();
  };

  const handleConfirm = handleSubmit((data) => {
    if (type === 'create') {
      createMemoRoom(data);
    } else {
      updateRoom({
        id: selectedRoomId,
        param: data,
      });
    }
  });

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <ModalContents>
        <S.Form onSubmit={handleConfirm}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true, max: NAME_MAX }}
            render={({ field }) => (
              <TextField
                id="name"
                label={`룸 이름 (최대 ${NAME_MAX}자)`}
                placeholder="룸 이름을 입력하세요."
                maxLength={NAME_MAX}
                {...field}
              />
            )}
          />
          <Controller
            name="roomCategoryId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <RoomTypeRadioGroup label="룸 유형" {...field} />}
          />
        </S.Form>
      </ModalContents>
      <ModalButtonGroup>
        <Button variant="secondary" onClick={handleCancel}>
          취소
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={!isDirty || !isValid}
          onClick={handleConfirm}
        >
          확인
        </Button>
      </ModalButtonGroup>
    </Modal>
  );
};

export default UpsertRoomDialog;
