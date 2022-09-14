import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div<{ open: boolean }>`
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

  z-index: ${({ theme }) => theme.zIndex.modal};
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

export const Dim = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;

  background-color: rgba(51, 51, 51, 0.8);

  ${(p) =>
    css`
      animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
    `}
`;
