import styled from '@emotion/styled';

const PADDING = 8;

export const TextButton = styled.button`
  ${(p) => p.theme.typography.h4};
  color: ${(p) => p.theme.color.purple1};
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${PADDING}px 100px;
`;

export const Date = styled.span`
  width: ${`calc(100% + ${PADDING * 2}px)`};
  padding: 20px 16px 14px;
  margin-left: -${PADDING}px;
  ${(p) => p.theme.typography.body6};
`;

export const EditActionRow = styled.div`
  z-index: ${(p) => p.theme.zIndex.header};
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  width: 100%;
  height: 88px;
  padding: 16px 20px calc(env(safe-area-inset-bottom, 0) + 52px);

  background-color: ${(p) => p.theme.color.white};
  box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.12);
`;

export const DeleteButton = styled.button`
  margin-left: auto;
`;
