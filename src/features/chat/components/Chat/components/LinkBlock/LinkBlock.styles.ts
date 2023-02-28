import styled from '@emotion/styled';

import { ellipsis } from '@src/shared/styles';

export const Wrapper = styled.div`
  width: 80%;
  max-width: 262px;
  border-radius: 16px;
  margin-top: 6px;
  background-color: ${(p) => p.theme.color.white};
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: calc(100% * 0.5);
  background-color: ${(p) => p.theme.color.purple5};

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px 11px;
  min-height: 55px;
`;

export const Title = styled.span<{ hasDescription?: boolean }>`
  ${(p) => p.theme.typography.body2};
  ${(p) => ellipsis(p.hasDescription ? 1 : 2)}
  color: ${(p) => p.theme.color.black1};
`;

export const Description = styled.span<{ hasTitle?: boolean }>`
  margin-top: 2px;
  ${(p) => p.theme.typography.body5};
  ${(p) => ellipsis(p.hasTitle ? 1 : 2)}
  color: ${(p) => p.theme.color.black1};
`;
