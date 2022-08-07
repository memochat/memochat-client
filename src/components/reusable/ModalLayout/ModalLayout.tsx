import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { ModalLayoutProps } from './ModalLayout.types';
import * as S from './ModalLayout.styles';

const ModalLayout: React.FC<ModalLayoutProps> = ({ open, children, onClose }) => {
  const dimRef = useRef<HTMLDivElement>(null);
  const isVisible = useModalLayoutVisible(open, dimRef);

  if (!isVisible) {
    return null;
  }

  return (
    <S.Container open={open}>
      <S.Dim ref={dimRef} open={open} onClick={onClose} />
      {children}
    </S.Container>
  );
};

export default ModalLayout;

const useModalLayoutVisible = <T extends HTMLElement>(open: boolean, dimRef: RefObject<T>) => {
  const [isVisible, setIsVisible] = useState<boolean>(open);

  useEffect(() => {
    open && setIsVisible(true);
  }, [open]);

  const handleAnimationend = useCallback(() => {
    !open && setIsVisible(false);
  }, [open]);

  /** 애니메이션이 끝난 후에 모달이 안보이도록 함 */
  useEffect(() => {
    let divRefValue: T | null = null;

    if (dimRef.current) {
      divRefValue = dimRef.current;
      divRefValue.addEventListener('animationend', handleAnimationend);
    }

    return () => {
      divRefValue?.removeEventListener('animationend', handleAnimationend);
    };
  }, [dimRef, handleAnimationend]);

  return isVisible;
};
