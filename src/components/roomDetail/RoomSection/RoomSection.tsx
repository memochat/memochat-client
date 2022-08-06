import Image from 'next/image';

import * as S from './RoomSection.styles';
import { RoomSectionProps } from './RoomSection.types';

import Icon from '@src/components/reusable/Icon';

const RoomSection = (props: RoomSectionProps) => {
  const { count, title, onClick, images, color } = props;
  return (
    <S.Wrapper>
      <S.RoomSectionButton onClick={onClick}>
        <S.RoomSectionTitle color={color}>{title}</S.RoomSectionTitle>
        {count}
        {count && (
          <S.IconBox>
            <Icon name="ArrowRight" width="16px" height="16px"></Icon>
          </S.IconBox>
        )}
      </S.RoomSectionButton>
      {images && (
        <S.RoomSectionContent>
          {images.map((image) => (
            <S.ImageBox key={image}>
              <Image alt="ok" layout="fill" src={image}></Image>
            </S.ImageBox>
          ))}
        </S.RoomSectionContent>
      )}
    </S.Wrapper>
  );
};

export default RoomSection;
