import React, { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

interface ModalLayoutProps {
  open: boolean;
  children?: ReactNode;
  onClose?: VoidFunction;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ open, children, onClose }) => {
  const dimRef = useRef<HTMLDivElement>(null);
  const isVisible = useModalLayoutVisible(open, dimRef);

  if (!isVisible) {
    return null;
  }

  return (
    <Container open={open}>
      <Dim ref={dimRef} open={open} onClick={onClose} />
      {children}
    </Container>
  );
};

export default ModalLayout;

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 768px;
  height: 100vh;

  overflow: hidden;

  ${(p) => !p.open && 'pointer-events: none;'}
`;

export const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
  }
`;

const Dim = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;

  background-color: rgba(51, 51, 51, 0.8);

  ${(p) =>
    css`
      animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
    `}
`;

const useModalLayoutVisible = <T extends HTMLElement>(open: boolean, dimRef: RefObject<T>) => {
  const [isVisible, setIsVisible] = useState<boolean>(open);

  useEffect(() => {
    open && !isVisible && setIsVisible(true);
  }, [open, isVisible]);

  const handleAnimationend = useCallback(() => {
    !open && isVisible && setIsVisible(false);
  }, [open, isVisible]);

  /** 애니메이션이 끝난 후에 모달이 안보이도록 함 */
  useEffect(() => {
    let divRefValue: T | null = null;

    if (dimRef.current) {
      divRefValue = dimRef.current;
      divRefValue.addEventListener('animationend', handleAnimationend);
    }

    return () => {
      divRefValue && divRefValue.removeEventListener('animationend', handleAnimationend);
    };
  }, [dimRef, handleAnimationend]);

  return isVisible;
};
