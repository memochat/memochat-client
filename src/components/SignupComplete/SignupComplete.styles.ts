import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 36px 18px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
`;

export const Content = styled.div`
  height: 80%;
`;

export const ButtonContainer = styled.div`
  padding: 0 18px 80px 18px;
`;
