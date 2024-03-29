import styled from '@emotion/styled';

import { ColorToken } from '@src/shared/styles/themes';

export const Wrapper = styled.div`
  padding-top: 22px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailMenuList = styled.div`
  padding-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextButton = styled.button<{ color: ColorToken }>`
  padding: 16px;
  text-align: left;
  ${(p) => p.theme.typography.h4};
  color: ${({ theme, color }) => theme.color[color]};
`;

export const Divider = styled.hr`
  margin: 32px auto;
  width: calc(100% - 32px);
  height: 1px;
  background-color: ${({ theme }) => theme.color.gray5};
  border: none;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
