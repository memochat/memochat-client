import { css } from '@emotion/react';
import styled from '@emotion/styled';

import LottieComponent from '@src/shared/components/Lottie';
import { fadeIn, fadeOut } from '@src/shared/components/ModalLayout/ModalLayout.styles';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Dim = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.loading - 1};

  background-color: rgba(51, 51, 51, 0.8);

  ${(p) =>
    css`
      animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
    `}
`;

export const Lottie = styled(LottieComponent)`
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.loading};
`;
