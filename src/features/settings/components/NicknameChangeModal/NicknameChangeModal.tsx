import { useQueryClient } from '@tanstack/react-query';
import { Controller, SubmitHandler } from 'react-hook-form';

import useUpdateNicknameMutation from '@src/features/settings/api/useUpdateNicknameMutation';
import useNickNameChangeForm, {
  NickNameChangeFormType,
} from '@src/features/settings/hooks/useNicknameChangeForm';
import useUsersMeQuery from '@src/features/user/api/useUsersMeQuery';
import { Button, Modal, ModalButtonGroup, TextField } from '@src/shared/components';
import { toast } from '@src/shared/utils/toast';

import { NicknameChangeModalProps } from './NicknameChangeModal.types';
import * as S from './NicknameChangeModal.styles';

const NicknameChangeModal = (props: NicknameChangeModalProps) => {
  const { onClose, open } = props;
  const { handleSubmit, reset, control } = useNickNameChangeForm();

  const queryClient = useQueryClient();
  const { mutate: updateNickname } = useUpdateNicknameMutation({
    onError: (e) => {
      toast.error(e.message);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries(useUsersMeQuery.getKey());
      onClose();
    },
  });

  const onSubmit: SubmitHandler<NickNameChangeFormType> = (data) => {
    const { nickname } = data;
    updateNickname({ nickname });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal title="닉네임 변경" open={open} onClose={onClose}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <Controller
            name="nickname"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  {...field}
                  id="nickName"
                  placeholder="변경할 닉네임을 입력하세요"
                  label="닉네임(최대 12자)"
                  maxLength={12}
                />
                <S.ErrorHelperText>{fieldState.error?.message}</S.ErrorHelperText>
              </>
            )}
          />
        </S.InputWrapper>
        <ModalButtonGroup>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" type="submit">
            확인
          </Button>
        </ModalButtonGroup>
      </S.Form>
    </Modal>
  );
};

export default NicknameChangeModal;
