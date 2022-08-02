import { useEffect, useState } from 'react';

import { RoomTypeRadioGroupProps } from './RoomTypeRadioGroup.types';
import * as S from './RoomTypeRadioGroup.styles';

/** @todo api 연동 */
const MOCK_ROOM_TYPES = [
  {
    id: 1,
    iconImageUrl: '',
    name: '기본',
  },
  {
    id: 2,
    iconImageUrl: '',
    name: '즐겨찾기',
  },
  {
    id: 3,
    iconImageUrl: '',
    name: '일정',
  },
  {
    id: 4,
    iconImageUrl: '',
    name: '쇼핑',
  },
  {
    id: 5,
    iconImageUrl: '',
    name: '문서',
  },
];

const RoomTypeRadioGroup = ({ label, value, onChange, className }: RoomTypeRadioGroupProps) => {
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState(value);

  useEffect(() => {
    setSelectedRoomTypeId(value);
  }, [value]);

  const handleRoomTypeClick = (id: number) => {
    setSelectedRoomTypeId(id);
    onChange?.(id);
  };

  return (
    <S.Wrapper className={className}>
      <S.Label>{label}</S.Label>
      <S.RoomTypeList>
        {MOCK_ROOM_TYPES.map((roomType) => (
          <S.RoomType
            key={roomType.id}
            isSelected={roomType.id === selectedRoomTypeId}
            onClick={() => handleRoomTypeClick(roomType.id)}
          >
            <img src={roomType.iconImageUrl} alt={roomType.name} />
          </S.RoomType>
        ))}
      </S.RoomTypeList>
    </S.Wrapper>
  );
};

export default RoomTypeRadioGroup;
