import { MouseEventHandler } from 'react';
import { useEffectOnce } from 'react-use';

import * as S from './RoomMemoForm.styles';
import { RoomMemoFormProps } from './RoomMemoForm.types';

import useRoomMemoForm from '@src/features/room/hooks/useMemoForm';
import { Icon } from '@src/shared/components';

const RoomMemoForm = ({}: RoomMemoFormProps) => {
  const {
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { isDirty },
  } = useRoomMemoForm();

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
            <Icon name="Album" size={32} />
          </button>
          <button type="button" onClick={onCameraIconBtnClick} aria-label="카메라">
            {/*TODO: native 권한 요청 */}
            <Icon name="Camera" size={32} />
          </button>
        </S.ToolBoxIconBox>
        {isDirty && (
          <S.SubmitBtn type="submit">
            <Icon name="Send" size={32} />
          </S.SubmitBtn>
        )}
      </S.ToolBox>
    </S.Wrapper>
  );
};

export default RoomMemoForm;
