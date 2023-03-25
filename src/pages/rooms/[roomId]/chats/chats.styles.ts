import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@src/shared/components/Header/Header.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(p) => p.theme.color.slateGrey};
`;

export const ChatContainer = styled.div<{ memoFormHeight?: number }>`
  flex: 1;
  overflow-y: auto;
  ${(p) => `max-height: calc(100vh - ${HEADER_HEIGHT}px - ${p.memoFormHeight}px);`}
`;
