import styled from '@emotion/styled';

import { breakpoint } from '@src/shared/styles/themes';

const STATUS_BAR_HEIGHT = 'env(safe-area-inset-top)';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: ${STATUS_BAR_HEIGHT};
  margin: 0 auto;
  background-color: lightblue;

  ${(p) => p.theme.breakpoint.small} {
    max-width: ${breakpoint.small}px;
  }
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: lightcoral;

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
