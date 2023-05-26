import styled from '@emotion/styled';

import _PageLayout from '@src/shared/components/layouts/PageLayout/PageLayout';

export const PageLayout = styled(_PageLayout)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(p) => p.theme.color.slateGrey};
`;

export const ChatContainer = styled.div<{ memoFormHeight?: number }>`
  height: 100%;
  ${(p) => `max-height: calc(100% - ${p.memoFormHeight}px);`}
`;
