import styled from '@emotion/styled';

import _PageLayout from '@src/shared/components/layouts/PageLayout/PageLayout';

export const PageLayout = styled(_PageLayout)`
  display: flex;
  flex-direction: column;
  padding: 36px 18px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.color.black1};
  white-space: pre;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 110px;
`;
