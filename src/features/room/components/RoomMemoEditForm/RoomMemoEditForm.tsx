import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Icon } from '@src/shared/components';
import { urlRegex } from '@src/shared/utils/parseUrls';

import * as S from './RoomMemoEditForm.styles';
import { RoomMemoEditFormProps, RoomMemoEditFormValues } from './RoomMemoEditForm.types';

const RoomMemoEditForm = ({ defaultValues, onSubmit, onClose }: RoomMemoEditFormProps) => {
  const { register, reset, handleSubmit, setFocus } = useForm<RoomMemoEditFormValues>({
    defaultValues: {
      message: '',
    },
  });

  const submit: SubmitHandler<RoomMemoEditFormValues> = (value) => {
    if (!value.roomId) {
      alert('채팅방을 선택해주세요.');
      return;
    }

    // NOTE: 빈 문자열인 경우 메시지를 보내지 않음 (카카오톡과 동일하게 구현)
    if (!value.message.trim()) {
      return;
    }

    const urls = value.message.match(urlRegex);
    const link = urls?.[0];

    onSubmit({
      id: value.id,
      roomId: value.roomId,
      type: link ? 'LINK' : 'TEXT',
      message: value.message,
      link,
    });
  };

  useEffect(() => {
    if (!defaultValues) {
      return;
    }
    reset(defaultValues);
    setTimeout(() => {
      setFocus('message');
    }, 500);
  }, [defaultValues, reset, setFocus]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>메모 수정하기</S.Title>
        <S.CloseButton onClick={onClose}>
          <Icon name="Close" size={18} />
        </S.CloseButton>
      </S.Header>
      <S.Form onSubmit={handleSubmit(submit)}>
        <S.TextArea rows={3} {...register('message')} />
        <S.ToolBox>
          <S.SubmitBtn type="submit">
            <Icon name="Send" size={32} />
          </S.SubmitBtn>
        </S.ToolBox>
      </S.Form>
    </S.Wrapper>
  );
};

export default RoomMemoEditForm;
