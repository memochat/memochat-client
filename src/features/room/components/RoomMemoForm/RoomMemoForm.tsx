import { ChangeEvent, forwardRef, LegacyRef, MouseEventHandler } from 'react';

import * as S from './RoomMemoForm.styles';
import { RoomMemoFormProps } from './RoomMemoForm.types';

import useRoomMemoForm, { RoomMemoFormType } from '@src/features/room/hooks/useMemoForm';
import { Icon } from '@src/shared/components';
import { NativeMessageSender } from '@src/shared/configs/webview';

// TODO: alert -> 커스텀 alert로 변경
const RoomMemoForm = forwardRef(
  ({ showSelectedRoom, selectedRoom }: RoomMemoFormProps, ref: LegacyRef<HTMLFormElement>) => {
    const {
      register,
      setValue,
      handleSubmit,
      formState: { isDirty },
    } = useRoomMemoForm();

    const autoGrow = (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.currentTarget.style.height = 'auto';
      e.currentTarget.style.height = `${64 + Math.round(e.currentTarget.scrollHeight - 64)}px`;
    };

    const handleAlbumClick: MouseEventHandler<HTMLButtonElement> = async () => {
      if (!selectedRoom) {
        alert('채팅방을 선택해주세요.');
        return;
      }

      const nativeMessageSender = new NativeMessageSender();
      const { imageUrl } = await nativeMessageSender.uploadImage({ type: 'gallery' });
      alert(`갤러리 이미지: ${imageUrl}`);
    };

    const handleCameraClick: MouseEventHandler<HTMLButtonElement> = async () => {
      if (!selectedRoom) {
        alert('채팅방을 선택해주세요.');
        return;
      }

      const nativeMessageSender = new NativeMessageSender();
      const { imageUrl } = await nativeMessageSender.uploadImage({ type: 'camera' });
      alert(`카메라 이미지: ${imageUrl}`);
    };

    const handleTextAreaWrapperClick = () => {
      if (!selectedRoom) {
        alert('채팅방을 선택해주세요.');
      }
    };

    const onSubmit = (v: RoomMemoFormType) => {
      alert(JSON.stringify(v));
    };

    return (
      <S.Form ref={ref} onSubmit={handleSubmit((v) => onSubmit(v as RoomMemoFormType))}>
        {showSelectedRoom && selectedRoom && (
          <S.SelectedRoomName>{selectedRoom.name}</S.SelectedRoomName>
        )}
        <S.TextAreaWrapper onClick={handleTextAreaWrapperClick}>
          {showSelectedRoom && selectedRoom && <Icon name="Reply" size={20} color="gray4" />}
          <S.Textarea
            {...register('memo', { onChange: autoGrow, disabled: !selectedRoom })}
            placeholder={selectedRoom ? '메모를 입력하세요.' : '채팅방 선택 후 메모작성.'}
          />
        </S.TextAreaWrapper>
        <S.ToolBox>
          <S.ToolBoxIconBox>
            <button type="button" onClick={handleAlbumClick} aria-label="앨범">
              <Icon name="Album" size={32} />
            </button>
            <button type="button" onClick={handleCameraClick} aria-label="카메라">
              <Icon name="Camera" size={32} />
            </button>
          </S.ToolBoxIconBox>
          {isDirty && (
            <S.SubmitBtn type="submit">
              <Icon name="Send" size={32} />
            </S.SubmitBtn>
          )}
        </S.ToolBox>
      </S.Form>
    );
  },
);
RoomMemoForm.displayName = 'RoomMemoForm';

export default RoomMemoForm;
