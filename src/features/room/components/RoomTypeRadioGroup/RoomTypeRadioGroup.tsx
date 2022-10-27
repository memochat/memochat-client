import { useEffect, useState } from 'react';

import { RoomTypeRadioGroupProps } from './RoomTypeRadioGroup.types';
import * as S from './RoomTypeRadioGroup.styles';
import useMemoRoomCategoriesQuery from '../../api/useMemoRoomCategoriesQuery';

const RoomTypeRadioGroup = ({ label, value, onChange, className }: RoomTypeRadioGroupProps) => {
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState(value);

  const { data: memoRoomCategories, isLoading } = useMemoRoomCategoriesQuery();

  useEffect(() => {
    setSelectedRoomTypeId(value);
  }, [value]);

  const handleRoomTypeClick = (id: number) => {
    setSelectedRoomTypeId(id);
    onChange?.(id);
  };

  if (isLoading) {
    // TODO : 스켈레톤
    return null;
  }

  return (
    <S.Wrapper className={className}>
      <S.Label>{label}</S.Label>
      <S.RoomTypeList>
        {memoRoomCategories?.map((roomType) => (
          <S.RoomType
            key={roomType.id}
            isSelected={roomType.id === selectedRoomTypeId}
            onClick={() => handleRoomTypeClick(roomType.id)}
          >
            <img src={roomType.thumbnail} alt={roomType.name} />
          </S.RoomType>
        ))}
      </S.RoomTypeList>
    </S.Wrapper>
  );
};

export default RoomTypeRadioGroup;
