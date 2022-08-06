import { MouseEventHandler } from 'react';

import * as S from './RoomMemoForm.styles';
import { RoomMemoFormProps } from './RoomMemoForm.types';

import Icon from '@src/components/reusable/Icon';
import useMemoForm from '@src/hooks/useMemoForm';

const RoomMemoForm = ({}: RoomMemoFormProps) => {
  const { register, setValue } = useMemoForm();

  const onAlbumIconBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert('album click');
    setValue('images', []);
  };

  const onCameraIconBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert('camera click');
  };

  return (
    <S.Wrapper>
      <S.Input {...register('memo')} placeholder="메모를 입력하세요." />
      <S.ToolBox>
        <S.ToolBoxIconBox>
          <button onClick={onAlbumIconBtnClick}>
            <Icon name="Album" width="21px" height="24px"></Icon>
          </button>
          <button onClick={onCameraIconBtnClick}>
            {/*TODO: native 권한 필요 */}
            <Icon name="Camera" width="21px" height="24px"></Icon>
          </button>
        </S.ToolBoxIconBox>
        <S.SubmitBtn type="submit">
          <Icon name="ArrowUp" color="white" width="14px" height="16px"></Icon>
        </S.SubmitBtn>
      </S.ToolBox>
    </S.Wrapper>
  );
};

export default RoomMemoForm;
