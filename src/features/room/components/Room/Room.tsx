import Image from 'next/image';

import { ChatType, RoomProps } from './Room.types';
import * as S from './Room.styles';

/** @todo 스와이프: https://www.npmjs.com/package/react-swipeable-list */
const Room = ({
  name,
  roomType,
  isSelected,
  lastChat,
  className,
  onSelect,
  onClick,
}: RoomProps) => {
  return (
    <S.Wrapper className={className}>
      <S.SelectButton type="button" onClick={onSelect}>
        <S.RoomType isSelected={isSelected} aria-label={roomType.name}>
          <Image src={roomType.imageUrl} alt={roomType.name} width={24} height={24} />
        </S.RoomType>
        {isSelected && <S.SelectText>선택</S.SelectText>}
      </S.SelectButton>
      <S.Preview onClick={onClick}>
        <S.RoomName>{name}</S.RoomName>
        <S.RoomLastChat>
          {!lastChat
            ? '작성된 메모가 없습니다.'
            : getLastChatByChatType(lastChat.type, lastChat.text)}
        </S.RoomLastChat>
      </S.Preview>
    </S.Wrapper>
  );
};

export default Room;

const getLastChatByChatType = (type: ChatType, text = ''): string => {
  if (type === 'image') {
    return '이미지 메모';
  }
  if (type === 'video') {
    return '동영상 메모';
  }

  return text;
};
