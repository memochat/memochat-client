import styled from '@emotion/styled';

import { ellipsis } from '@src/shared/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: 14px;
  margin-top: 9px;
  border-radius: 16px 0px 16px 16px;
  background-color: ${(p) => p.theme.color.white};
`;

export const Message = styled.span`
  width: 100%;
  ${(p) => p.theme.typography.body1};
  word-break: break-all;
  white-space: pre-wrap;

  > a {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    color: ${(p) => p.theme.color.blue1};

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
      color: ${(p) => p.theme.color.blue1};
    }
  }
`;

export const Date = styled.time`
  margin-top: 6px;
  ${(p) => p.theme.typography.body6};
  color: ${(p) => p.theme.color.purple1};
`;

export const LinkBlock = styled.a`
  width: 80%;
  max-width: 262px;
  border-radius: 16px;
  margin-top: 6px;
  background-color: ${(p) => p.theme.color.white};
  color: ${(p) => p.theme.color.black1};
  overflow: hidden;
`;

export const LinkImageConatiner = styled.div`
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

export const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px 11px;
  min-height: 55px;
`;

export const LinkTitle = styled.span<{ hasDescription: boolean }>`
  ${(p) => p.theme.typography.body2};

  ${(p) => ellipsis(p.hasDescription ? 1 : 2)}
`;

export const LinkDescrition = styled.span<{ hasTitle: boolean }>`
  margin-top: 2px;
  ${(p) => p.theme.typography.body5};
  ${(p) => ellipsis(p.hasTitle ? 1 : 2)}
`;
