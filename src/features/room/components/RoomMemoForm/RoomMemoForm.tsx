import { ChangeEvent, forwardRef, LegacyRef, MouseEventHandler } from 'react';

import useRoomMemoForm, { RoomMemoFormType } from '@src/features/room/hooks/useMemoForm';
import { Icon } from '@src/shared/components';
import { NativeMessageSender } from '@src/shared/configs/webview';
import { useOS } from '@src/shared/hooks/useOS';
import { urlRegex } from '@src/shared/utils/parseUrls';

import { RoomMemoFormProps } from './RoomMemoForm.types';
import * as S from './RoomMemoForm.styles';

// TODO: alert -> 커스텀 alert로 변경
// TODO: 채팅 두번 전송 방지
const RoomMemoForm = forwardRef(
  (
    { roomId, roomName, showSelectedRoom, onSubmit }: RoomMemoFormProps,
    ref: LegacyRef<HTMLFormElement>,
  ) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { isDirty },
    } = useRoomMemoForm();
    const os = useOS();

    const autoGrow = (e: ChangeEvent<HTMLTextAreaElement>) => {
      e.currentTarget.style.height = 'auto';
      e.currentTarget.style.height = `${64 + Math.round(e.currentTarget.scrollHeight - 64)}px`;
    };

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!roomId) {
        alert('채팅방을 선택해주세요.');
        return;
      }

      // TODO: input에서 이미지 업로드
    };

    const handleAlbumClick: MouseEventHandler<HTMLButtonElement> = async () => {
      if (!roomId) {
        alert('채팅방을 선택해주세요.');
        return;
      }

      const nativeMessageSender = new NativeMessageSender();
      const { imageUrl } = await nativeMessageSender.uploadImage({ type: 'gallery' });
      alert(`갤러리 이미지: ${imageUrl}`);
    };

    const handleCameraClick: MouseEventHandler<HTMLButtonElement> = async () => {
      if (!roomId) {
        alert('채팅방을 선택해주세요.');
        return;
      }

      const nativeMessageSender = new NativeMessageSender();
      const { imageUrl } = await nativeMessageSender.uploadImage({ type: 'camera' });
      alert(`카메라 이미지: ${imageUrl}`);
    };

    const handleTextAreaWrapperClick = () => {
      if (!roomId) {
        alert('채팅방을 선택해주세요.');
      }
    };

    const submit = (value: RoomMemoFormType) => {
      if (!roomId) {
        alert('채팅방을 선택해주세요.');
        return;
      }

      // NOTE: 빈 문자열인 경우 메시지를 보내지 않음 (카카오톡과 동일하게 구현)
      if (!value.message.trim()) {
        return;
      }

      const urls = value.message.match(urlRegex);
      const link = urls?.[0];

      onSubmit?.(
        {
          roomId,
          type: link ? 'LINK' : 'TEXT',
          message: value.message,
          link,
        },
        reset,
      );
    };

    return (
      <S.Form ref={ref} onSubmit={handleSubmit((v) => submit(v as RoomMemoFormType))}>
        {showSelectedRoom && roomName && <S.SelectedRoomName>{roomName}</S.SelectedRoomName>}
        <S.TextAreaWrapper onClick={handleTextAreaWrapperClick}>
          {showSelectedRoom && roomName && <Icon name="Reply" size={20} color="gray4" />}
          <S.Textarea
            {...register('message', { onChange: autoGrow, disabled: !roomId })}
            placeholder={roomId ? '메모를 입력하세요.' : '채팅방 선택 후 메모작성.'}
          />
        </S.TextAreaWrapper>
        <S.ToolBox>
          <S.ToolBoxIconBox>
            {os === 'web' ? (
              <label aria-label="앨범">
                <input type="file" accept="image/*" hidden onChange={uploadImage} />
                <Icon name="Album" size={32} />
              </label>
            ) : (
              <>
                <button type="button" onClick={handleAlbumClick} aria-label="앨범">
                  <Icon name="Album" size={32} />
                </button>
                <button type="button" onClick={handleCameraClick} aria-label="카메라">
                  <Icon name="Camera" size={32} />
                </button>
              </>
            )}
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
