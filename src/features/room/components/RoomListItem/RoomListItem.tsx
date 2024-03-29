import { useState } from 'react';
import Image from 'next/image';
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { RoomListItemProps } from './RoomListItem.types';
import * as S from './RoomListItem.styles';

const DEFAULT_MESSAGE = '작성된 메모가 없습니다.';

// TODO 고정 또는 순서 변경 기능 추가
const RoomListItem = ({
  name = '-',
  roomCategory,
  isSelected,
  message = DEFAULT_MESSAGE,
  className,
  onSelect,
  onClick,
  onEdit,
  onDelete,
}: RoomListItemProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleSwipeProgress = () => {
    setIsDragging(true);
  };

  const handleSwipeEnd = () => {
    setTimeout(() => {
      setIsDragging(false);
    });
  };

  return (
    <SwipeableListItem
      fullSwipe={false}
      listType={ListType.IOS}
      onSwipeProgress={handleSwipeProgress}
      onSwipeEnd={handleSwipeEnd}
      trailingActions={
        <TrailingActions>
          <SwipeAction onClick={onEdit}>
            <S.SwipeActionButton color="blue1">수정</S.SwipeActionButton>
          </SwipeAction>
          <SwipeAction onClick={onDelete}>
            <S.SwipeActionButton color="red1">삭제</S.SwipeActionButton>
          </SwipeAction>
        </TrailingActions>
      }
    >
      <S.Wrapper className={className}>
        <S.SelectButton type="button" onClick={onSelect}>
          <S.RoomType isSelected={isSelected} aria-label={roomCategory.name}>
            <Image src={roomCategory.thumbnail} alt={roomCategory.name} width={24} height={24} />
          </S.RoomType>
          {isSelected && <S.SelectText>선택</S.SelectText>}
        </S.SelectButton>
        <S.Preview
          onClick={() => {
            /** swipe 동작시 onClick이 실행되는 것을 방지 */
            if (!isDragging) {
              onClick();
            }
          }}
        >
          <S.RoomName>{name}</S.RoomName>
          <S.RoomLastChat>{message ?? DEFAULT_MESSAGE}</S.RoomLastChat>
        </S.Preview>
      </S.Wrapper>
    </SwipeableListItem>
  );
};

export default RoomListItem;
