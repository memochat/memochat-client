import { useQueryClient } from '@tanstack/react-query';
import { Controller, SubmitHandler } from 'react-hook-form';

import * as S from './NicknameChangeModal.styles';
import { NicknameChangeModalProps } from './NicknameChangeModal.types';

import usePatchNickNameChangeMutation from '@src/features/settings/api/usePatchNickNameChangeMutation';
import useNickNameChangeForm, {
  NickNameChangeFormType,
} from '@src/features/settings/hooks/useNicknameChangeForm';
import { Button, Modal, ModalButtonGroup, TextField } from '@src/shared/components';
import { toast } from '@src/shared/utils/toast';
import { getUsersMeKey } from '@src/shared/utils/queryKeys';

const NicknameChangeModal = (props: NicknameChangeModalProps) => {
  const { onClose, open } = props;
  const { handleSubmit, reset, control } = useNickNameChangeForm();

  const queryClient = useQueryClient();
  const { mutate } = usePatchNickNameChangeMutation({
    onError: (e) => {
      toast.error(e.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(getUsersMeKey());
      onClose();
    },
  });

  const onSubmit: SubmitHandler<NickNameChangeFormType> = (data) => {
    const { nickname } = data;
    mutate({ nickname });
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
