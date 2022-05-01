import styled from '@emotion/styled';

import { getRoomIconImageUrlByType } from '@src/helpers/room';
import { RoomType, roomTypes } from '@src/types/api/room';

interface RoomTypeRadioGroupProps {
  label: string;
  value: RoomType;
  onChange: (value: RoomType) => void;
}

const RoomTypeRadioGroup = ({ label, value, onChange }: RoomTypeRadioGroupProps) => {
  const handleRadioClick = (type: RoomType) => () => {
    onChange(type);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <RadioWrapper>
        {roomTypes.map((type) => (
          <Radio key={type} isSelected={value === type} onClick={handleRadioClick(type)}>
            <img src={getRoomIconImageUrlByType(type)} alt={`${type} 타입`} />
          </Radio>
        ))}
      </RadioWrapper>
    </Wrapper>
  );
};

export default RoomTypeRadioGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(p) => p.theme.color.purple1};
`;

const RadioWrapper = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Radio = styled.li<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 1rem;
  border-radius: 0.8rem;

  background-color: ${(p) => (p.isSelected ? p.theme.color.purple4 : p.theme.color.purple6)};

  & > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
