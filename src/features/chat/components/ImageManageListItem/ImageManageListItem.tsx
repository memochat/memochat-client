import { ChangeEvent } from 'react';
import Image from 'next/image';

import { ImageManageListItemProps } from './ImageManageListItem.types';
import * as S from './ImageManageListItem.styles';

/** @todo 이미지를 못불러온 경우 */
const ImageManageListItem = ({
  mode = 'read',
  imageSrc,
  imageAlt,
  isSelected,
  onSelectChange,
}: ImageManageListItemProps) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelectChange?.(e.target.checked);
  };

  return (
    <S.Wrapper showBorder={mode === 'edit' && !!isSelected}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="responsive"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      {mode === 'edit' && <S.Checkbox checked={isSelected} onChange={handleCheckboxChange} />}
    </S.Wrapper>
  );
};

export default ImageManageListItem;
