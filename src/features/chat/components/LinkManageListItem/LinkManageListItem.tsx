import { ChangeEvent } from 'react';

import { LinkManageListItemProps } from './LinkManageListItem.types';
import * as S from './LinkManageListItem.styles';

/** @todo 이미지, 타이틀을 못불러온 경우 */
const LinkManageListItem = ({
  mode = 'read',
  title,
  imageSrc,
  imageAlt,
  isSelected,
  onSelectChange,
}: LinkManageListItemProps) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelectChange?.(e.target.checked);
  };

  return (
    <S.Container>
      <S.Wrapper isSelected={mode === 'edit' && !!isSelected}>
        <S.Image src={imageSrc} alt={imageAlt} width="100%" height="60%" />
        <S.InfoWrapper>
          <S.Title>{title}</S.Title>
        </S.InfoWrapper>
        {mode === 'edit' && <S.Checkbox checked={isSelected} onChange={handleCheckboxChange} />}
      </S.Wrapper>
    </S.Container>
  );
};

export default LinkManageListItem;
