import { MouseEventHandler } from 'react';
import { useEffectOnce } from 'react-use';

import * as S from './RoomMemoForm.styles';
import { RoomMemoFormProps } from './RoomMemoForm.types';

import Icon from '@src/components/reusable/Icon';
import useMemoForm from '@src/hooks/useMemoForm';

const RoomMemoForm = ({}: RoomMemoFormProps) => {
  const {
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { isDirty },
  } = useMemoForm();

  const memoRegister = register('memo', {
    onChange: (e) => {
      e.currentTarget.style.height = 'auto';
      e.currentTarget.style.height = `${64 + Math.round(e.currentTarget.scrollHeight - 64)}px`;
    },
  });

  const onAlbumIconBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert('album click');
    setValue('images', []);
  };

  const onCameraIconBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert('camera click');
  };

  useEffectOnce(() => {
    setFocus('memo');
  });

  return (
    <S.Wrapper
      onSubmit={handleSubmit((v) => {
        alert(JSON.stringify(v, null, 2));
      })}
    >
      <S.Textarea {...memoRegister} placeholder="채팅방 선택 후 메모작성." />
      <S.ToolBox>
        <S.ToolBoxIconBox>
          <button type="button" onClick={onAlbumIconBtnClick} aria-label="앨범">
            <Icon name="Album" width="100%" height="100%" />
          </button>
          <button type="button" onClick={onCameraIconBtnClick} aria-label="카메라">
            {/*TODO: native 권한 요청 */}
            <Icon name="Camera" width="100%" height="100%" />
          </button>
        </S.ToolBoxIconBox>
        {isDirty ? (
          <S.SubmitBtn type="submit">
            <Icon name="Send" width="100%" height="100%" />
          </S.SubmitBtn>
        ) : (
          <span>
            <Icon name="Pencil" width="100%" height="100%" />
          </span>
        )}
      </S.ToolBox>
    </S.Wrapper>
  );
};

export default RoomMemoForm;
