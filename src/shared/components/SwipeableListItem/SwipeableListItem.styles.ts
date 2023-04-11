import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  margin: 13px 0;
`;

export const Contents = styled.div`
  width: 100%;
  flex-shrink: 0;
`;

export const TrailingActions = styled.div`
  display: flex;
  flex-shrink: 0;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  width: 0;
  height: 100%;

  > button {
    width: 63px;
    height: 63px;
    margin: 0 6px 0 0;
    color: white;
    background-color: ${(p) => p.theme.color.blue1};
    border-radius: 16px;
    flex-shrink: 0;
  }
`;
