import styled from '@emotion/styled';

import { ColorTheme } from '@src/themes';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
`;

export const RoomSectionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  ${({ theme }) => theme.typography.body1};
  gap: 10px;
`;

export const RoomSectionTitle = styled.h3<{ color?: keyof ColorTheme }>`
  flex-grow: 1;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black1)};
  text-align: left;
`;

export const RoomSectionContent = styled.div`
  display: flex;
  max-width: 100%;
  gap: 8px;
  padding: 6px 15px 22px 15px;
`;

export const ImageBox = styled.div`
  width: 80px;
  background-color: #ebeef6;
  height: 80px;
  border-radius: 8px;
  position: relative;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
