import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useEffectOnce } from 'react-use';

import * as S from './BottomSheet.styles';
import { BottomSheetProps } from './BottomSheet.types';

const Component = ({ title, children }: BottomSheetProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

const BottomSheet = (props: BottomSheetProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffectOnce(() => {
    setElement(document.getElementById('bottom-sheet'));
  });

  if (typeof window === 'undefined' || !element) {
    return null;
  }

  return createPortal(<Component {...props} />, element);
};

export default BottomSheet;
