import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.purple1};

  z-index: ${(p) => p.theme.zIndex.header};
`;
