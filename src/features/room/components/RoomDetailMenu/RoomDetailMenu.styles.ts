import styled from '@emotion/styled';

import { ColorTheme } from '@src/shared/styles/themes';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
`;

export const RoomDetailMenuButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  ${({ theme }) => theme.typography.body1};
  gap: 10px;
`;

export const RoomDetailMenuTitle = styled.h3<{ color?: keyof ColorTheme }>`
  flex-grow: 1;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black1)};
  text-align: left;
`;

export const RoomDetailMenuContent = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 15px 22px 15px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
