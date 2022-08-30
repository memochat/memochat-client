import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

export const Wrapper = styled.article<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-height: 60%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  background-color: ${(p) => p.theme.color.white};
  opacity: 0;

  ${(p) =>
    css`
      animation: ${p.open ? slideUp : slideDown} 0.3s forwards;
    `}

  overflow: hidden;
`;

export const Title = styled.h1`
  padding: 12px;
  margin: 3px 0 0;
  width: 100%;
  height: 44px;
  max-height: 55%;
  text-align: center;
  color: ${(p) => p.theme.color.black1};
  ${(p) => p.theme.typography.h3};
`;
