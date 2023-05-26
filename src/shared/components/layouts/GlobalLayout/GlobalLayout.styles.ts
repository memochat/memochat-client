import styled from '@emotion/styled';

import { breakpoint } from '@src/shared/styles/themes';

export const STATUS_BAR_HEIGHT = 'env(safe-area-inset-top)';
export const MAX_WIDTH = `${breakpoint.small}px`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 100vh;
  overflow: hidden;
  padding-top: ${STATUS_BAR_HEIGHT};
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background-color: ${(p) => p.theme.color.purple1};
    height: 3px;
    left: 0;
    position: fixed;
    top: ${STATUS_BAR_HEIGHT};
    width: 100%;
    z-index: 2000;
  }
`;
