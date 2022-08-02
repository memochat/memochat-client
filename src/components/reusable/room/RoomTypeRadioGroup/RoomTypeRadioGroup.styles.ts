import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${(p) => p.theme.typography.body3};
  color: ${(p) => p.theme.color.purple1};
  margin-bottom: 6px;
`;

export const RoomTypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const RoomType = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 0 10px 10px 0;
  border-radius: 8px;
  background-color: ${(p) => (p.isSelected ? p.theme.color.purple6 : 'transparent')};

  overflow: hidden;

  > img {
    width: 24px;
    height: 24px;
  }
`;
