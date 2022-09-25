import { ChangeEvent } from 'react';
import Image from 'next/image';

import { ImageManageListItemProps } from './ImageManageListItem.types';
import * as S from './ImageManageListItem.styles';

/** @todo 이미지를 못불러온 경우 */
const ImageManageListItem = ({
  mode = 'read',
  imageSrc,
  isSelected,
  onSelectChange,
  className,
  size = '100%',
}: ImageManageListItemProps) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelectChange?.(e.target.checked);
  };

  return (
    <S.Wrapper className={className} isSelected={mode === 'edit' && !!isSelected} size={size}>
      <Image
        src={imageSrc}
        alt={imageSrc}
        layout="responsive"
        width="100%"
        height="100%"
        objectFit="cover"
        style={{ mixBlendMode: 'darken' }}
      />
      {mode === 'edit' && <S.Checkbox checked={isSelected} onChange={handleCheckboxChange} />}
    </S.Wrapper>
  );
};

export default ImageManageListItem;
