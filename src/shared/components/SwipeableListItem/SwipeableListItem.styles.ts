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

export const TrailingActionsWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  width: 0;
  height: 100%;
`;
