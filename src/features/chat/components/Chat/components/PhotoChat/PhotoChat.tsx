import { useEffect, useRef } from 'react';

import { blankDataUriImage } from '@src/shared/constants/image';

import * as S from './PhotoChat.styles';
import { PhotoChatProps } from './PhotoChat.types';

//기획에 width는 70%로 고정되어있음, 하지만 나중에는 다른 width도 대응해야할 상황이 있을것 같아 optional처리함
const PhotoChat = ({ src, alt, width = '70%' }: PhotoChatProps) => {
  const ref = useRef<HTMLImageElement>(null);

  const loadRealImage = (_src: string) => {
    const img = new Image();
    img.src = _src;
    img.onload = () => {
      setTimeout(() => {
        ref.current.src = _src;
      }, 2000);
    };
  };

  useEffect(() => {
    loadRealImage(src);
  }, [src]);

  return (
    <S.Wrapper width={width}>
      <S.Img ref={ref} src={blankDataUriImage} alt={alt} />
      <S.Span>12:30 PM</S.Span>
    </S.Wrapper>
  );
};

export default PhotoChat;
