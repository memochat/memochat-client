import styled from '@emotion/styled';

import { ColorTheme } from '@src/themes';

const HEADER_HEIGHT = 50;

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT + 'px'};
  width: 100%;
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray5};

  display: grid;
  grid-template-columns: 2fr 8fr 2fr;

  z-index: 1; //TODO: 특수 컴포넌트별 z-index값 설정이 필요
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.color.black1};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  padding-top: ${HEADER_HEIGHT + 'px'};
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.gray6};
`;

export const NBCSection = styled.section`
  padding-top: 40px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NBCBox = styled.div`
  padding-top: 8px;
  display: flex;
  padding: 16px;
  width: 100%;
`;

export const NBCTitle = styled.h3`
  flex-grow: 1;
  text-align: left;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray3};
`;

export const NBCButton = styled.button`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.purple1};
`;

export const RoomSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
`;

export const RoomSectionButton = styled.button<{ color?: keyof ColorTheme }>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black1)};

  gap: 10px;
`;

export const RoomSectionTitle = styled.h3`
  flex-grow: 1;
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.black1};
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
