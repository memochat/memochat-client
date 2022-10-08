import styled from '@emotion/styled';

import { breakpoint } from '@src/shared/styles/themes';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  ${(p) => p.theme.breakpoint.small} {
    max-width: ${breakpoint.small}px;
  }
`;
