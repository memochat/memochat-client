import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
`;

export const Title = styled.h6`
  ${({ theme }) => theme.typography.h3};
  width: 100%;
  text-align: center;
  padding: 15px 0;
`;

export const Content = styled.div`
  padding: 0 16px 32px 16px;

  display: flex;
  flex-direction: column;
`;
