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
      <S.Textarea {...memoRegister} placeholder="메모를 입력하세요." />
      <S.ToolBox>
        <S.ToolBoxIconBox>
          <button type="button" onClick={onAlbumIconBtnClick} aria-label="앨범">
            <Icon name="Album" width="21px" height="24px"></Icon>
          </button>
          <button type="button" onClick={onCameraIconBtnClick} aria-label="카메라">
            {/*TODO: native 권한 필요 */}
            <Icon name="Camera" width="21px" height="24px"></Icon>
          </button>
        </S.ToolBoxIconBox>
        {isDirty && (
          <S.SubmitBtn type="submit">
            <Icon name="ArrowUp" color="white" width="14px" height="16px"></Icon>
          </S.SubmitBtn>
        )}
      </S.ToolBox>
    </S.Wrapper>
  );
};

export default RoomMemoForm;
