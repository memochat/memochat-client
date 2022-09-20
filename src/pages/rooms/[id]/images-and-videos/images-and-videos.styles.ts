import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0 100px;
`;

export const Date = styled.span`
  width: 100%;
  padding: 20px 16px 14px;
  ${(p) => p.theme.typography.body6};
`;

export const EditActionRow = styled.div`
  z-index: ${(p) => p.theme.zIndex.header};
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 88px;
  padding: 16px 20px 52px;

  background-color: ${(p) => p.theme.color.white};
  box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.12);
`;
