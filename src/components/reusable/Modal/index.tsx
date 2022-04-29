import { ReactNode } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import ModalLayout from '../ModalLayout';

interface ModalButtonGroupProps {
  children: ReactNode;
}

export const ModalButtonGroup = ({ children }: ModalButtonGroupProps) => {
  return <ButtonGroup>{children}</ButtonGroup>;
};

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 1.6rem 1.6rem;

  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

interface ModalProps {
  open: boolean;
  onClose: () => null;
  title: string;
  children: ReactNode;
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  return (
    <ModalLayout open={open} onClose={onClose}>
      <Wrapper open={open}>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </ModalLayout>
  );
};

export default Modal;

export const slideUp = keyframes`
  from {
    top: 55%;
    opacity: 0;
  }

  to {
    top: 50%;
    opacity: 1;
  }
`;

export const slideDown = keyframes`
  from {
    top: 50%;
    opacity: 1;
  }
  
  to {
    top: 55%;
    opacity: 0;
  }
`;

const Wrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  border-radius: 1.6rem;

  background-color: ${(p) => p.theme.semanticColor.background};
  opacity: 0;

  ${(p) =>
    css`
      animation: ${p.open ? slideUp : slideDown} 0.3s forwards;
    `}
`;

const Title = styled.h1`
  margin: 1.6rem 1.6rem 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  color: ${(p) => p.theme.color.black1};
`;
