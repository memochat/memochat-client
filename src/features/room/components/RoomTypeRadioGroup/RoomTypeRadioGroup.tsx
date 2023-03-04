import { forwardRef, useEffect, useState } from 'react';

import useMemoRoomCategoriesQuery from '../../api/useMemoRoomCategoriesQuery';
import * as S from './RoomTypeRadioGroup.styles';
import { RoomTypeRadioGroupProps } from './RoomTypeRadioGroup.types';

const RoomTypeRadioGroup = forwardRef<HTMLInputElement, RoomTypeRadioGroupProps>(
  ({ name, label, value, onChange, className }, ref) => {
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
            <label key={roomType.id}>
              <input
                type="radio"
                name={name}
                ref={ref}
                value={roomType.id}
                checked={roomType.id === selectedRoomTypeId}
                onChange={(e) => handleRoomTypeClick(parseInt(e.target.value))}
              />
              <S.RoomType isSelected={roomType.id === selectedRoomTypeId}>
                <img src={roomType.thumbnail} alt={roomType.name} />
              </S.RoomType>
            </label>
          ))}
        </S.RoomTypeList>
      </S.Wrapper>
    );
  },
);

RoomTypeRadioGroup.displayName = 'RoomTypeRadioGroup';

export default RoomTypeRadioGroup;
