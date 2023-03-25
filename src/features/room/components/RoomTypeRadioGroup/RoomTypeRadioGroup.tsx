import { forwardRef, useEffect, useState } from 'react';

import useRoomCategoriesQuery from '../../api/useRoomCategoriesQuery';

import * as S from './RoomTypeRadioGroup.styles';
import { RoomTypeRadioGroupProps } from './RoomTypeRadioGroup.types';

const RoomTypeRadioGroup = forwardRef<HTMLInputElement, RoomTypeRadioGroupProps>(
  ({ name, label, value, onChange, className }, ref) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(value);

    const { data: roomCategories, isLoading } = useRoomCategoriesQuery();

    useEffect(() => {
      setSelectedCategoryId(value);
    }, [value]);

    const handleRoomTypeClick = (id: number) => {
      setSelectedCategoryId(id);
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
          {roomCategories?.map((roomCategory) => (
            <label key={roomCategory.id}>
              <input
                type="radio"
                name={name}
                ref={ref}
                value={roomCategory.id}
                checked={roomCategory.id === selectedCategoryId}
                onChange={(e) => handleRoomTypeClick(parseInt(e.target.value))}
              />
              <S.RoomType isSelected={roomCategory.id === selectedCategoryId}>
                <img src={roomCategory.thumbnail} alt={roomCategory.name} />
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
